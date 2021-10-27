import { Router } from "express";

import {idEvents} from '../controllers/events'

const router = Router();

router.get('/server-edu/events/:id', idEvents);

export default router