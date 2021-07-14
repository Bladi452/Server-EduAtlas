import {connect} from '../database'

export const navegacion = async (req, res) =>{
    const db = await connect()

    const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[req.params.id])
  
    res.json(user[0])
}

export const navegacion = async (req, res) =>{
        const db = await connect()
        const solicitud = await db.query("SELECT * FROM solicitud WHERE Matricula = ?", [req.params.id])
        res.json(solicitud[0])
}