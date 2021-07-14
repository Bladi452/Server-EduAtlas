import { Router } from "express";

import {navegacion} from '../controllers/navegacion'

const router = Router();

router.get('/navegacion/:id', navegacion);

export default router