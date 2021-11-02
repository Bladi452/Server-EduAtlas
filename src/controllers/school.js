import {connect} from "../database";

export const getSchool = async (req, res) => {
    const db = await connect()
    try {
       
   const [rows] = await db.query('SELECT * FROM escuelas')

    res.json(rows)    
        
    
} catch (error) {
    console.log(error)
    res.status(404).json({message: error})}finally{
        db.destroy()
    }
    
}

export const idSelect = async (req, res) =>{
    const {id} = req.params
    const db = await connect();
    try {
       
    const [rows] = await db.query('SELECT * FROM escuelas WHERE Codigo_Escuelas = ?',[
        id
    ]);
   

    res.json(rows)
   
} catch (error) {
    console.log(error)
    res.status(404).json({message: error})}finally{
        db.destroy()
    }
  

}



export const idschool = async (req, res) =>{
   
    const {id} = req.params
    const db = await connect();
    try {
     
    const [rows] = await db.query('SELECT * FROM usuario WHERE Codigo_Escuelas = ?',[
        id
    ]);
    

   
    res.json(rows.length)
   
} catch (error) {

    console.log(error)
    res.status(404).json({message: error})}finally{
        db.destroy()
    }
}



export const addReq = async (req, res) =>{
    const body = req.body
    const db = await connect()
    console.log(body)

    try {
        
        const solicitud = await db.query("INSERT INTO solicitud (Fecha, Estatus, Codigo_Escuelas, Matricula, Id_Curso) VALUES (NOW(),?,?,?,?) " ,[body.Estatus, body.Codigo_Escuelas, body.id_Usu, body.id_curso])
 if(!solicitud[0]){
            
        { res.status(404).json({message: 'No se pudo enviar la solicitud'})

        }

    }  else
    { res.json({message: 'Solicitud enviada'}) }
    
    
     } catch (error) 
     { console.log(error) 
      res.status(404).json({message: error})
  }finally { 
      db.destroy()
  }

    }
