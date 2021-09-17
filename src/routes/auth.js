import {Router} from 'express'
import {validar, registrar, conectar, getMat} from "../controllers/auth"

const router = Router();

router.post('/server-edu/auth/conec/:id/:id_cargo',conectar)
router.post('/server-edu/auth/regis',registrar)
router.post('/server-edu/auth/login',validar)
router.get('/server-edu/auth/getmat',getMat)

export default router