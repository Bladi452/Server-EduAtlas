import {connect} from "../database";

export const idEvents = async (req, res) =>{
    const db = await connect();
    try {

    const [rows] = await db.query('SELECT * FROM eventos WHERE Codigo_Escuelas = ?',[
        req.params.id
    ]);
    console.log(rows)
    res.json(rows)
db.end()    
} catch (error) {
    res.status(400).json({message: error})
db.end()
}

}
