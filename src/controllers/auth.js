import {connect} from '../database'
import {encryptPassword, matchPassword} from '../middleware/helpers'
import jwt, { decode } from 'jsonwebtoken';

export const registrar = async (req, res) =>{


    const db = await connect()
    const pass = await encryptPassword(req.body.password)
   const [rows] = await db.query("INSERT INTO usuario (Matricula, Nombre, Apellido, Correo, Pass, Fecha_Nacimiento, Codigo_Escuelas) VALUES (?,?,?,?,?,?,?)",[
        aumentar(),
        req.body.Nombre,
        req.body.Apellidos,
        req.body.Email,
        pass,
        req.body.date,
        null
    ], aumentar())
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
    const contra = req.body.password

    const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[Matricula])
    console.log(contra)
    console.log(user[0][0].Pass)
    if(user[0].length > 0){
        const validPassword = await matchPassword( contra, user[0][0].Pass)
        if(validPassword){
            const token = jwt.sign({ Matricula: req.body.Matricula }, 'secret', { expiresIn: '1h' });
            res.status(200).json({message: "Usuario y contraseña validado"})
        }else{
          res.status(502).json({message:"La contraseña es incorrecta"})
        }
    }else{
        return res.status(404).json({message: "Usuario no encontrado"})
    }
}
