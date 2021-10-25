import {connect} from '../database'

export const navegacion = async (req, res) =>{
    const db = await connect()

    try {

        const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[req.params.id])
            res.json(user[0])    
            db.end();
        } catch (error) {
        res.status(400).json({message: error})
        db.end();
    }


}

export const navegacionGetSol = async (req, res) =>{
    const db = await connect()
    try {
 
        const solicitud = await db.query("SELECT * FROM solicitud WHERE Matricula = ? ORDER BY Id_Solicitud DESC"
        , [req.params.id])
        res.json(solicitud[0])   
        db.end();
    } catch (error) {
        res.status(400).json({message: error})
        db.end();
    }
 
}