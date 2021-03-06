import {connect} from '../database'

export const navegacion = async (req, res) =>{
    const {id} = req.params
    const db = await connect()

    try {
        
        const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[id])
            res.json(user[0]) 

    } catch (error) {
        console.log(error)
        res.json(error)

    }finally{
        db.end()
    }


}

export const navegacionGetSol = async (req, res) =>{
    const {id} = req.params
    const db = await connect()
    try {
       
        const solicitud = await db.query("SELECT * FROM solicitud WHERE Matricula = ? ORDER BY Id_Solicitud DESC"
        , [id])
       


        res.json(solicitud[0])   
       
    } catch (error) {
        console.log(error)
        res.json(error)
         
    
    }
    finally{
        db.end()
    }
}