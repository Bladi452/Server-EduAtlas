import express from "express"
import { Router } from "express";

import {uploadImg, download, getDocs} from '../controllers/document'

const router = Router();

router.get('/server-edu/document/descarga/:id', download);

router.get('/server-edu/document/:id', getDocs);

router.post('/server-edu/document/:id/:id_escu/:docu',  uploadImg) 


export default router