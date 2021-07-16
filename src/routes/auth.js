import {Router} from 'express'
import {validar, registrar, isAuth} from "../controllers/auth"
const router = Router();
router.post('/auth/regis',registrar)
router.post('/auth/login',validar)

export default router