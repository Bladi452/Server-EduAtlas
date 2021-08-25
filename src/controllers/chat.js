import { connect } from "../database";

export const getChat = async (req, res) =>{
    const db = await connect()
    const [rows] = await db.query('SELECT sala_usuario.Id,sala.Fecha ,sala.id_Sala, sala.Nombre FROM sala_usuario INNER JOIN sala ON sala.id_Sala = (SELECT Id_Sala FROM sala_usuario WHERE Matricula = 20211017) LIMIT 1;;', [
        req.params.id
    ])
    if(!rows.length > 0){
        res.status(404).json({message: "No encontrado"})
    } else{
        return res.status(200).json(rows)
    }
}

export const getMessage = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query('SELECT mensaje.mensaje,mensaje.id ,mensaje.Matricula, mensaje.id_Sala, mensaje.fecha , CONCAT(usuario.Nombre, usuario.Apellido) AS NomCom FROM `usuario` INNER JOIN mensaje ON usuario.Matricula = mensaje.Matricula WHERE id_Sala = 1 ORDER BY `mensaje`.`id` DESC;'

    ,[
        req.params.id
    ])
    if(!rows.length > 0){
        console.log(rows)
        res.status(404).json({message: "No encontrado"})
    } else{
        return res.status(200).json(rows)
    }

}

export const sendMessage = async (req, res) =>{
    const db = await connect();
  const rows =  await db.query("INSERT INTO mensaje (mensaje, id_Sala, Matricula, fecha) VALUES (?, ?, ?, NOW())",[
        req.body.mensaje,
        req.body.id_Sala,
        req.body.Matricula
    ])
    if(!rows){
        res.status(304).json({message: "No se envio"})
    } else{
        return res.status(200).json({message: "Mensaje enviado"})
    }
}