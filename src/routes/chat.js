import { Router } from "express";
import {getChat, sendMessage} from "../controllers/chat"
const router = Router();

router.get('/chat/:id', getChat)

router.post('/chat', sendMessage)

export default router