 import {connect} from '../database'

export const download = async(req, res) =>{
    const db = await connect()
    const pass = await db.query("SELECT * FROM documentos WHERE Id_documentos = ?",[req.params.id])

    const file = __dirname + pass[0][0].UrlDocs
    res.download(file)
}


export const uploadApp = async (req, res) =>{
    let sampleFile;
    let uploadPath;
    let ruta
 
    
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
    }
  
    console.log('req.files >>>', req.files); // eslint-disable-line
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

    sampleFile = req.files.sampleFile;
    console.log(sampleFile)
    ruta = '/upload/' + sampleFile.name
    uploadPath = __dirname + ruta;
 
     // Use the mv() method to place the file somewhere on your server

    const db = await connect()
    sampleFile.mv(uploadPath, async function (err) {
       await db.query("INSERT INTO documentos (UrlDocs, Estado, Id_Escuelas ,Id_Usuario) VALUES (?,?,?,?)",[
          ruta,
          "null",
          req.params.id_escu,
          req.params.id
       ])
       
       if (err) {
        return res.status(500).send(err);
      }
 
      res.send('File uploaded to ' + uploadPath);
    });
  }