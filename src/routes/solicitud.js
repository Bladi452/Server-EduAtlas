import { Router } from "express";
import {getSolid, getAcept,getDenega } from "../controllers/solicitud"

const router = Router();

router.get('/solicitudes/:id', getSolid)

router.put('/apro/:id', getAcept)

router.put('/dene/:id', getDenega)

export default router