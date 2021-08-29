import {Router} from 'express'
import {validar, registrar, conectar, getMat} from "../controllers/auth"

const router = Router();

router.post('/auth/conec/:id/:id_cargo',conectar)
router.post('/auth/regis',registrar)
router.post('/auth/login',validar)
router.get('/auth/getmat',getMat)

export default router