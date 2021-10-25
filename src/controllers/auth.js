import {connect} from '../database'
import {encryptPassword, matchPassword} from '../middleware/helpers'
import jwt, { decode } from 'jsonwebtoken';

export const conectar = async(req, res) =>{
    const db = await connect()

    try {
        const [rows] = await db.query("INSERT INTO cargo_seleccionar ( Id_Cargo, Matricula) VALUES (?,?)",[req.params.id_cargo, req.params.id])
        if(!rows){
            res.status(304).json({message: "No se guardo"})
            db.end();
        } else{
             res.status(200).json({message: "Usuario guardado"})
             db.end();
            }    
    } catch (error) {
        console.log(error)
        db.end()
    }


}

export const getMat = async (req, res) => {

    const db = await connect()
    try {
        const [rows] = await db.query('SELECT Matricula FROM usuario ORDER by Matricula DESC LIMIT 1;')
       console.log(rows)
         res.json(rows)
db.end()         
    } catch (error) {
        console.log(error)
        db.end();
    }
}

export const registrar = async (req, res) =>{
    const db = await connect()

    try {
    const pass = await encryptPassword(req.body.password)
  const [rows] = await db.query("INSERT INTO usuario (Nombre, Apellido, Correo, Pass, Fecha_Nacimiento, Codigo_Escuelas) VALUES (?,?,?,?,?,?)",[
        req.body.Nombre,
        req.body.Apellidos,
        req.body.Email,
        pass,
        req.body.date,
        null
    ])
    if(!rows){
        res.status(304).json({message: "No se guardo"})
        db.end()
    }else{
        res.status(200).json({message: `Tu matricula es Copiala o captura la pantalla`})
        db.end();
    }
    res.end('estamos bien');
    
} catch (error) {
    res.status(404).json({message:error})
    db.end()

}


}

export const validar = async (req, res, next) =>{
    const db = await connect()

    try {    
        const Matricula = req.body.Matricula;
        const contra = req.body.password
    
        const user = await db.query("SELECT usuario.Matricula, usuario.Codigo_Escuelas, usuario.Pass, cargo_seleccionar.Id_Cargo_Seleccionar, cargo.Nivel FROM cargo_seleccionar INNER JOIN cargo ON cargo_seleccionar.Id_Cargo = cargo.Id_Cargo INNER JOIN usuario ON cargo_seleccionar.Matricula = usuario.Matricula WHERE usuario.Matricula = ?",[Matricula])
    
        if(user[0].length > 0){
            const validPassword = await matchPassword( contra, user[0][0].Pass)
            if(validPassword){
                const token = jwt.sign({ Matricula: req.body.Matricula }, 'secret', { expiresIn: '1h' });
                res.status(200).json({message: user[0]})
                db.end();
            }else{
              res.status(502).json({message:"La contraseña es incorrecta"})
              db.end();
            }
        }else{
            res.status(404).json({message: "Usuario no encontrado"})
            db.end();
        }
    } catch (error) {
        res.status(400).json({message: error})
        db.end();
    }


}
