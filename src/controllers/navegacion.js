import {connect} from '../database'

export const navegacion = async (req, res) =>{

    try {
        const db = await connect()

        const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[req.params.id])
      
        res.json(user[0])    
    } catch (error) {
        console.log(error)
    }


}

export const navegacionGetSol = async (req, res) =>{
    try {
        const db = await connect()
        const solicitud = await db.query("SELECT * FROM solicitud WHERE Matricula = ? ORDER BY Id_Solicitud DESC"
        , [req.params.id])
        res.json(solicitud[0])   
    } catch (error) {
        console.log(error)
    }
 
}