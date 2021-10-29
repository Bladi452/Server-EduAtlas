import {connect} from "../database";

export const idEvents = async (req, res) =>{
    const db = await connect();
    try {

    const [rows] = await db.query('SELECT * FROM eventos WHERE Codigo_Escuelas = ?',[
        req.params.id
    ]);
    res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener los eventos',
            error
        });
    }
db.end()    
        

}
