import {connect} from '../database'
import {encryptPassword, matchPassword} from '../middleware/helpers'
import jwt, { decode } from 'jsonwebtoken';




export const conectar = async(req, res) =>{

const db = await connect()
const [rows] = await db.query("INSERT INTO cargo_seleccionar ( Id_Cargo, Matricula) SELECT 1, Matricula FROM usuario ORDER BY Matricula DESC LIMIT 1")
if(!rows){
    res.status(304).json({message: "No se guardo"})
console.log(matricula)
} else{
    num++
    return res.status(200).json({message: "Usuario guardado"})
}
}

let num = 1015
const date = new Date()
const year = date.getFullYear()
export const registrar = async (req, res) =>{
    console.log(year)

   let  matriculaS = `${year}${num}`
   let  matricula = parseInt(matriculaS)
console.log(matricula)
   
    const db = await connect()
    const pass = await encryptPassword(req.body.password)
  const [rows] = await db.query("INSERT INTO usuario (Matricula, Nombre, Apellido, Correo, Pass, Fecha_Nacimiento, Codigo_Escuelas) VALUES (?,?,?,?,?,?,?)",[
        matricula,
        req.body.Nombre,
        req.body.Apellidos,
        req.body.Email,
        pass,
        req.body.date,
        null
    ])
    if(!rows){
        res.status(304).json({message: "No se guardo"})
    console.log(matricula)
    } else{
        num++
        return res.status(200).json({message: "Usuario guardado"})
        
    }

    console.log(matricula)
        
    res.end('estamos bien');

}

export const validar = async (req, res, next) =>{
    const db = await connect()
    
    const Matricula = req.body.Matricula;
    const contra = req.body.password

    const user = await db.query("SELECT usuario.Matricula, usuario.Pass, cargo_seleccionar.Id_Cargo_Seleccionar, cargo.Nivel FROM cargo_seleccionar INNER JOIN cargo ON cargo_seleccionar.Id_Cargo = cargo.Id_Cargo INNER JOIN usuario ON cargo_seleccionar.Matricula = usuario.Matricula WHERE usuario.Matricula = ? And cargo.Nivel = 107",[Matricula])

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
