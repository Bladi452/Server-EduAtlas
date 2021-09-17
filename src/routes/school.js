import { Router } from "express";
import {addReq, getSchool, idSelect} from "../controllers/school"
import {isAuth} from "../controllers/auth"

const router = Router();

router.get('/server-edu/school', getSchool)

router.get('/server-edu/school/:id', idSelect)

router.post('/server-edu/school/req', addReq)

export default router