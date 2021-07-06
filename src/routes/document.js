import { Router } from "express";

import {uploadApp, download} from '../controllers/document'

const router = Router();

router.get('/document/:id', download);

router.post('/document/:id/:id_escu', uploadApp);

export default router