import { connect } from "../database";

export const getChat = async (req, res) =>{
    const db = await connect()
    const [rows] = await db.query('SELECT * FROM sala_usuario WHERE Id_Usuario = ?', [
        req.params.id
    ])
    console.log(rows)

    res.json(rows)
}

export const getMessage = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query('SELECT * FROM mensaje WHERE Id_sala = ?',[
        req.params.id
    ])
  console.log(rows)
    res.json(rows)
}

export const sendMessage = async (req, res) =>{
    const db = await connect();
    await db.query("INSERT INTO mensaje (mensaje, id_Sala, id_Usuario, fecha) VALUES (?, ?, ?, ?)",[
        req.body.mensaje,
        req.body.id_Sala,
        req.body.id_Usuario,
        req.body.fecha
    ])
    res.send('Recibido')
}