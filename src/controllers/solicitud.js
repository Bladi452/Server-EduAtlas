import { connect } from "../database";

export const getSolid = async (req, res) =>{
  const db = await connect()

  try {
  
    const [pass] = await db.query('SELECT solicitud.Id_Solicitud, solicitud.Codigo_Escuelas ,solicitud.Fecha, solicitud.Estatus, usuario.Matricula, curso.Grado, escuelas.Nombre FROM solicitud INNER JOIN curso ON solicitud.Id_Curso = curso.ID_Curso INNER JOIN usuario ON usuario.Matricula = solicitud.Matricula INNER JOIN escuelas ON solicitud.Codigo_Escuelas = escuelas.Codigo_Escuelas WHERE solicitud.Codigo_Escuelas = ? AND solicitud.Estatus = "null"',[req.params.id])
    

  
  if(!pass.length > 0){
    return res.status(404).json({ message: 'No hay solicitudes' })
  } else {
    return res.json(pass)
  }   } catch (error) {
    console.log(error)
  } 
  db.end
  }
     

  export const updateTask = async (req, res) => {
    const db = await connect()  
    try {
      await db.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id,
      ]);
    
      res.sendStatus(204);
    

    
  }catch (error) {;
      res.status(400).json({message: error})    
     
    }
    db.end()
  };
    
  export const getAcept = async (req, res) =>{
    const db = await connect()

    try {
      const pass = await db.query("UPDATE `solicitud` SET `Estatus` = 'Aprobado' WHERE `solicitud`.`Id_Solicitud` = ?;",[
         req.params.id
       ]);

       
     if(!pass.length > 0){
        return res.status(404).json({ message: 'No hay solicitudes' })
      } else {
        return res.json(pass)
      }
    } catch (error) { 
      console.log(error)
    }   db.end()  
  }
         

  export const getDenega = async (req, res) =>{
    const db = await connect()
    
    try {

      const [pass] = await db.query("UPDATE `solicitud` SET `Estatus` = 'Denegado' WHERE `solicitud`.`Id_Solicitud` = ?;",[req.params.id])

    if(!pass.length > 0){   
      return res.status(404).json({ message: 'No hay solicitudes' })
          
        } else{
          return res.json(pass)

      }
    } catch (error) {
      console.log(error)
    }   db.end()
  }
     

    
  
