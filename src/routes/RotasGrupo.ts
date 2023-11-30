import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import ControllerGrupo from "../controllers/ControllerGrupo";


const prisma = new PrismaClient();//Instancia o prisma client
const GruposRouter = Router();//Instancia o Router

GruposRouter.get("/grupos", ControllerGrupo.listGrupos)
GruposRouter.post("/grupos", ControllerGrupo.createGrupo);
GruposRouter.put('/grupos', ControllerGrupo.updateGrupo);
GruposRouter.delete('/grupos', ControllerGrupo.deleteGrupo);

export default GruposRouter;