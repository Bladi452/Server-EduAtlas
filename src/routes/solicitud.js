import { Router } from "express";
import {getSolid, getAcept, getDenega } from "../controllers/solicitud"

const router = Router();

router.get('/server-edu/solicitudes/:id', getSolid)

router.put('/server-edu/apro/:id', getAcept)

router.put('/server-edu/dene/:id', getDenega)

export default router