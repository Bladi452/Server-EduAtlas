import { Router } from "express";
import {sendMessage} from "../controllers/chat"
const router = Router();

router.get('/chat/:id')

router.post('/chat', sendMessage)

export default router