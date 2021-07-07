import {connect} from '../database'
import {encryptPassword, matchPassword} from '../middleware/helpers'
import jwt, { decode } from 'jsonwebtoken';

export const registrar = async (req, res) =>{
    const db = await connect()
    const pass = await encryptPassword(req.body.password)
   const [rows] = await db.query("INSERT INTO usuario (Matricula, Nombre, Apellido, Correo, password,Fecha_Nacimiento, Nivel) VALUES (?,?,?,?,?,?,?)",[
        req.body.Matricula,
        req.body.Nombre,
        req.body.Apellidos,
        req.body.Email,
        pass,
        req.body.date,
        req.body.Nivel
    ])
    if(!rows){
        res.status(304).json({message: "No se guardo"})
    } else{
        return res.status(200).json({message: "Usuario guardado"})
    }
    res.json(rows);
}

export const validar = async (req, res, next) =>{
    const db = await connect()
    
    const Matricula = req.body.Matricula;
    const contra = req.body.password;

    const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[Matricula])
    
    
    if(user[0].length > 0){
        const validPassword = await matchPassword( contra, user[0][0].password)
        if(validPassword){
            const token = jwt.sign({ Matricula: req.body.Matricula }, 'secret', { expiresIn: '1h' });
            res.status(200).json({message: "Usuario y contraseña validado", "token": token})
        }else{
          res.status(502).json({message:"La contraseña es incorrecta"})
        }
    }else{
        return res.status(404).json({message: "Usuario no encontrado"})
    }
}

export const isAuth = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'not authenticated' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken; 
    try {
        decodedToken = jwt.verify(token, 'secret');
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    };
    if (!decodedToken) {
        res.status(401).json({ message: 'unauthorized' });
    } else {
        res.status(200).json({ message: 'here is your resource' });
    };
};