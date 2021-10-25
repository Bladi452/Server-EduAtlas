import {connect} from "../database";

export const getSchool = async (req, res) => {
    const db = await connect()
    try {

   const [rows] = await db.query('SELECT * FROM escuelas')
    res.json(rows)    
    db.end()
} catch (error) {
    res.status(404).json({message: error})}
    db.end()
}

export const idSelect = async (req, res) =>{
    const db = await connect();
    try {

    const [rows] = await db.query('SELECT * FROM escuelas WHERE Codigo_Escuelas = ?',[
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

export const addReq = async (req, res) =>{
    const db = await connect();
    try {
        
        const solicitud = await db.query("INSERT INTO solicitud (Fecha, Estatus, Codigo_Escuelas, Matricula, Id_Curso) VALUES (NOW(),?,?,?,?) ",[
            req.body.Estatus,
            req.body.Codigo_Escuelas,
            req.body.id_Usu,
            req.body.id_curso
        ])
        if(!solicitud){
            res.status(304).json({message: "No se envio la solicitud"})
            db.end();
        }else {
            db.end();
            return res.status(200).json({message: "Se genero la solicitud"})
        }    
    } catch (error) {
        res.status(400).json({message: error})
 db.end();
    }


}