import { Router } from "express";

import {idEvents} from '../controllers/events'
import {getRequests} from '../controllers/events'
import {addEvent} from '../controllers/events'

const router = Router();

router.get('/server-edu/events/:id', idEvents);
router.get('/server-edu/requests/:id', getRequests );
router.post('/server-edu/events', addEvent );

export default router