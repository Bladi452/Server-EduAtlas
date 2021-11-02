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

export const getRequests = async (req, res) =>{
    const {id} = req.params
    const db = await connect()

    try {
        
        const events = await db.query("SELECT * FROM usuario WHERE Codigo_Escuelas = ?",[id])

            res.json(events[0].length) 


    } catch (error) {

        console.log(error)
        res.json(error)

    }finally {
        db.destroy()
    }


}

export const addEvent = async (req, res) =>{
    
    const body = req.body
    const db = await connect()

    try {
        
        const events = await db.query("INSERT INTO eventos ( Nombre, Fecha_Ini, Descripcion, Codigo_Escuelas) VALUES ( ?, ?, ?, ?)",[ body.Nombre, body.Fecha_Ini, body.Descripcion,  body.Codigo_Escuelas])
                                     
            


            res.json(events[0])


    } catch (error) {

        console.log(error)
        res.json(error)

    }finally {
        db.destroy()
    }


}

