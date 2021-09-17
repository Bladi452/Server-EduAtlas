import { Router } from "express";

import {navegacion,navegacionGetSol} from '../controllers/navegacion'

const router = Router();

router.get('/server-edu/navegacion/:id', navegacion);

router.get('/server-edu/navegacionSel/:id', navegacionGetSol);

export default router