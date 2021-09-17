import { connect } from "../database";

export const getSolid = async (req, res) =>{
  try {
    
  } catch (error) {
      console.log(error)
  }

    const db = await connect()
  
    const [pass] = await db.query('SELECT solicitud.Id_Solicitud, solicitud.Codigo_Escuelas ,solicitud.Fecha, solicitud.Estatus, usuario.Matricula, curso.Grado, escuelas.Nombre FROM solicitud INNER JOIN curso ON solicitud.Id_Curso = curso.ID_Curso INNER JOIN usuario ON usuario.Matricula = solicitud.Matricula INNER JOIN escuelas ON solicitud.Codigo_Escuelas = escuelas.Codigo_Escuelas WHERE solicitud.Codigo_Escuelas = ? AND solicitud.Estatus = "null"',[req.params.id])
    
  if(!pass.length > 0){
        res.status(404).json({message: "No encontrado"})
    } else{
        return res.status(200).json(pass)
    }
  }

  export const updateTask = async (req, res) => {
  
    try {
    
    } catch (error) {
        console.log(error)
    }

    const connection = await connect();
    await connection.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.sendStatus(204);
  };

  export const getAcept = async (req, res) =>{

    try {
    
    } catch (error) {
        console.log(error)
    }

    const db = await connect()
   const pass = await db.query("UPDATE `solicitud` SET `Estatus` = 'Aprobado' WHERE `solicitud`.`Id_Solicitud` = ?;",[
      req.params.id
    ]);
    
  if(!pass.length > 0){
        res.status(404).json({message: "No encontrado"})
    } else{
        return res.status(200).json({message: "Estas son las Solicitudes"})
    }
  
  }

  export const getDenega = async (req, res) =>{
  
    try {
      const db = await connect()
  
      const [pass] = await db.query("UPDATE `solicitud` SET `Estatus` = 'Denegado' WHERE `solicitud`.`Id_Solicitud` = ?;",[req.params.id])
      
    if(!pass.length > 0){
          res.status(404).json({message: "No encontrado"})
      } else{
          return res.status(200).json(pass)
      }
    } catch (error) {
        console.log(error)
    }

    
  }