import {connect} from "../database";

export const idEvents = async (req, res) =>{
  const {id} = req.params;
  const db = await connect();
    try {
    
    const [rows] = await db.query('SELECT * FROM eventos WHERE Codigo_Escuelas = ?',[
        id
    ]);
    res.json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener los eventos',
            error
        });
    }finally {
        db.destroy();
    }
   
        

}
