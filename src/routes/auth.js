import {Router} from 'express'
import {validar} from "../controllers/auth"
const router = Router();

router.post('/auth',validar)

export default router