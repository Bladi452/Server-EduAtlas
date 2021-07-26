import {Router} from 'express'
import {validar, registrar, conectar} from "../controllers/auth"

const router = Router();

router.post('/auth/conec/',conectar)
router.post('/auth/regis',registrar)
router.post('/auth/login',validar)

export default router