import { Router } from "express";
import {addReq, getSchool, idSelect} from "../controllers/school"
import {isAuth} from "../controllers/auth"

const router = Router();

router.get('/school', getSchool)

router.get('/school/:id', idSelect)

router.post('/school/req', addReq)

export default router