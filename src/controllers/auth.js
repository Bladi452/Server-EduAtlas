import {connect} from '../database'
import {encryptPassword, matchPassword} from '../middleware/helpers'




export const conectar = async(req, res) =>{
    const db = await connect()

    try {
       
        const [rows] = await db.query("INSERT INTO cargo_seleccionar ( Id_Cargo, Matricula) VALUES (?,?)",[req.params.id_cargo, req.params.id])
      
        if(!rows){
          
            return res.status(404).json({
                ok: false,
                message: 'No se pudo conectar'  
            })
        
        } else{
           
            return res.status(200).json({
                ok: true,
                message: 'Se conecto correctamente'
            })
             
            }    
    } catch (error) {
        
        console.log(error)
        return res.status(500).json({
            ok: false,
            message: 'Error inesperado' 
        })
       
    }finally{
        db.end()
    }
     


}

export const getMat = async (req, res) => {

    const db = await connect()
    try {

        const [rows] = await db.query('SELECT Matricula FROM usuario ORDER by Matricula DESC LIMIT 1;')
   
       console.log(rows)
         res.json(rows)
       
    } catch (error) {
        console.log(error)
       
    }finally{
        db.end()
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
        return res.status(404).json({
            ok: false,
            message: 'No se pudo registrar'
        
        })
    } else{
        return res.status(200).json({
            ok: true,
            message: 'Se registro correctamente'
        })
    }               
    } catch (error) {   console.log(error)
        return res.status(500).json({
            ok: false,  
            message: 'Error inesperado'
        })  }   finally {           
            db.end()
        }

}




export const validar = async (req, res, next) =>{
  
    const Matricula = req.body.Matricula;
    const contra = req.body.password
    const db = await connect()
    try {    
       
      
    
        const user = await db.query("SELECT usuario.Matricula, usuario.Codigo_Escuelas, usuario.Pass, cargo_seleccionar.Id_Cargo_Seleccionar, cargo.Nivel FROM cargo_seleccionar INNER JOIN cargo ON cargo_seleccionar.Id_Cargo = cargo.Id_Cargo INNER JOIN usuario ON cargo_seleccionar.Matricula = usuario.Matricula WHERE usuario.Matricula = ?",[Matricula])
        

        if(!user[0][0]){
            return res.status(404).json({
                ok: false,
                message: 'No se encontro el usuario'
            })
        }
        const match = await matchPassword(contra, user[0][0].Pass)
        if(!match){
            return res.status(404).json({
                ok: false,
                message: 'Contraseña incorrecta'
            })
        }
      
        res.json({
            ok: true,
            message: 'Usuario validado',
            user: user[0]
                                                
        })
        
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            message: 'Error inesperado'
        })
    }

    finally {        
        db.end()
    }
}
