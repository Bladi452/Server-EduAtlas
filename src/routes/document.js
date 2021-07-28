import { Router } from "express";

import {uploadImg, download} from '../controllers/document'
import multer from 'multer'

const router = Router();

router.get('/document/:id', download);


const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const uploads = multer({ storage, fileFilter });

router.post('/document/:id/:id_escu', uploads.single('docs'), uploadImg)



 


export default router