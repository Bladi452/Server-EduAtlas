import { Router } from "express";
import { getChat ,getMessage, sendMessage} from "../controllers/chat"
const router = Router();

router.get('/server-edu/chat/:id', getChat)

router.get('/server-edu/chat/message/:id', getMessage)

router.post('/server-edu/chat', sendMessage)

export default router