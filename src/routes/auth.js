import {Router} from 'express'
import {validar, registrar} from "../controllers/auth"
const router = Router();

router.post('/auth/regis',registrar)
router.post('/auth/login',validar)
export default router