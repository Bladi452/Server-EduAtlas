import {connect} from "../database";

export const getSchool = async (req, res) => {
    const db = await connect()
   const [rows] = await db.query('SELECT * FROM escuelas')
  console.log(rows)
    res.json(rows)
}

export const idSelect = async (req, res) =>{
    const db = await connect();
    const [rows] = await db.query('SELECT * FROM escuelas WHERE Codigo_Escuelas = ?',[
        req.params.id
    ]);
    console.log(rows)
    res.json(rows)
}

export const addReq = async (req, res) =>{
    const db = await connect();
    const solicitud = await db.query("INSERT INTO solicitud (Fecha, Estatus, Codigo_Escuelas, Matricula, Id_Curso) VALUES (?,?,?,?,?) ",[
        req.body.Fecha,
        req.body.Estatus,
        req.body.Codigo_Escuelas,
        req.body.id_Usu,
        req.body.id_curso
    ])
    if(!solicitud){
        res.status(304).json({message: "No se envio la solicitud"})
    }else {
        return res.status(200).json({message: "Se genero la solicitud"})
    }
}