import { Router } from "express";
import { getUsuario, getUsuarios,createUsuario,updateUsuario,deleteUsuario } from "../controllers/usuarios.controllers.js";

const router=Router()
router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id', getUsuario)
router.post('/usuarios', createUsuario)
router.patch('/usuarios/:id', updateUsuario)
router.delete('/usuarios/:id',deleteUsuario )

export default router