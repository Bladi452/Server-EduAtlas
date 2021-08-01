import { Router } from "express";

import {uploadImg, download, getDocs} from '../controllers/document'

const router = Router();

router.get('/document/descarga/:id', download);

router.get('/document/:id', getDocs);

router.post('/document/:id/:id_escu/:docu',  uploadImg) 


export default router