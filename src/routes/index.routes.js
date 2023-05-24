import { Router } from "express";
import { prueba } from "../controllers/index.controllers.js";
const router=Router()
router.get('/prueba', prueba)
export default router