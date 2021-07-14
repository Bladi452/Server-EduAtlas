import {connect} from '../database'

export const navegacion = async (req, res) =>{
    const db = await connect()
    
    const Matricula = req.body.Matricula;

    const user = await db.query("SELECT * FROM usuario WHERE Matricula = ?",[req.params.id])
  
    res.json(user[0])
    }

    export const navegacion = async (req, res) =>{
        const db = await connect()
        const 
    }