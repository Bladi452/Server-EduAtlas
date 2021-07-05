import {connect} from "../database";

export const getSchool = async (req, res) => {
    const db = await connect()
   const [rows] = await db.query('SELECT * FROM escuelas')
  console.log(rows)
    res.json(rows)
}

export const idSelect = async (req, res) =>{
    const db = await connect();
    const [rows] = await db.query('SELECT * FROM escuelas WHERE Id_Escuelas = ?',[
        req.params.id
    ]);
    console.log(rows[0])
    res.json(rows)
}

export const addReq = async (req, res) =>{
    const db = await connect();
    const solicitud = await db.query("INSERT INTO solicitud (Fecha, Estatus, Id_Escuelas, Id_Usuario, Id_Curso) VALUES (?,?,?,?,?) ",[
        req.body.Fecha,
        req.body.Estatus,
        req.body.Id_Escuelas,
        req.body.Id_Usuario,
        req.body.Id_Curso
    ])
    res.send('Se almaceno')
}