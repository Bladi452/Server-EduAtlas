import { Router } from "express";
import {addReq, getSchool, idSelect, idschool} from "../controllers/school"


const router = Router();

router.get('/server-edu/school', getSchool)

router.get('/server-edu/school/:id', idSelect)

router.post('/server-edu/school/req', addReq)

router.get('/server-edu/school/length/:id', idschool)


export default router