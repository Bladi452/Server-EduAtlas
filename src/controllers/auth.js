import {connect} from '../database'
import {encryptPassword, matchPassword} from '../middleware/helpers'


export const registrar = async (req, res) =>{
    const db = await connect()
    const pass = await encryptPassword(req.body.password)
    await db.query("INSERT INTO usuario (Matricula, Nombre, Apellido, Correo, password,Fecha_Nacimiento, Nivel) VALUES (?,?,?,?,?,?,?)",[
        req.body.Matricula,
        req.body.Nombre,
        req.body.Apellido,
        req.body.Correo,
        pass,
        req.body.Fecha_Nacimiento,
        req.body.Nivel
    ])
    res.send('Se guardaron los datos')
}

export const validar = async (req, res, next) =>{
    const db = await connect()
    
    const {Matricula} = req.body;
    const contra = req.body.password;

    const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[Matricula])
    
    
    if(user[0].length > 0){
        const validPassword = await matchPassword( contra, user[0][0].password)
        if(validPassword){
            console.log("Contraseña validada, bienvenido");
        }else{
            console.log("No se valido la contraseña")
        }
    }else{
        console.log('No existe el usuario')
    }
    res.send('Termino de validar')
}

