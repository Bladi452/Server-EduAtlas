import { Router } from "express";
import { getChat ,getMessage, sendMessage} from "../controllers/chat"
const router = Router();

router.get('/chat/:id', getChat)

router.get('/chat/message/:id', getMessage)

router.post('/chat', sendMessage)

export default router