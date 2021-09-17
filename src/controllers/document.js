 import {connect} from '../database'

export const download = async(req, res) =>{
  try {
    const db = await connect()
    const [pass] = await db.query("SELECT * FROM documentos WHERE Id_documentos = ?",[req.params.id])

    const file = __dirname + pass[0].UrlDocs
  res.download(file)
    
  } catch (error) {
      console.log(error)
  }

}

export const getDocs = async (req, res) =>{
  try {
    const db = await connect()

    const [pass] = await db.query("SELECT * FROM documentos WHERE Matricula = ?",[req.params.id])
    
  if(!pass.length > 0){
        res.status(404).json({message: "No encontrado"})
    } else{
        return res.status(200).json(pass)
    }    
  } catch (error) {
      console.log(error)
  }

}
//hasta yo quiero saber pero no se, la que esta comentada se ve mejor


export const uploadImg = async (req, res) =>{
  let sampleFile;
  let uploadPath;
  let ruta

  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
    }
  
    console.log('req.files >>>', req.files);

    sampleFile = req.files.docs;
    console.log(sampleFile)
    ruta = '/upload/' + sampleFile.name
    uploadPath = __dirname + ruta;
 
     // Use the mv() method to place the file somewhere on your server

    const db = await connect()
    sampleFile.mv(uploadPath, async function (err) {
       await db.query("INSERT INTO documentos (Nombre,UrlDocs, Estado, Codigo_Escuelas ,Matricula) VALUES (?,?,?,?,?)",[
       
       req.params.docu,
        ruta,
         "null",
         req.params.id_escu,
         req.params.id
      ])
      
       if (err) {
        return res.status(500).send(err);
      }
 });
      
      res.send('File uploaded to '); 
    
  } catch (error) {
      console.log(error)
  }

 
   
}