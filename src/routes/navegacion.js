import { Router } from "express";

import {navegacion,navegacionGetSol} from '../controllers/navegacion'

const router = Router();

router.get('/navegacion/:id', navegacion);

router.get('/navegacionSel/:id', navegacionGetSol);

export default router