import { Router } from "express";

import {uploadImg, download, getDocs} from '../controllers/document'
import multer from 'multer'

const router = Router();

router.get('/document/descarga/:id', download);

router.get('/document/:mat', getDocs);

//configurar en que carpeta se debe guardar
const multerStorage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, '../controllers/upload' )

  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};

//la vaina que sube la imagen
const uploads = multer({ storage:multerStorage ,fileFilter });

//.single es para decir que es un solo archivo, docs es el objeto donde viene todo
router.post('/document/:id/:id_escu/:docu',  uploadImg)



 


export default router