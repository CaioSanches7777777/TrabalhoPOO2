import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import ControllerProfessor from "../controllers/ControllerProfessor";


const prisma = new PrismaClient();//Instancia o prisma client
const ProfessorRouter = Router();//Instancia o Router

ProfessorRouter.get("/professor", ControllerProfessor.listProfessores)
ProfessorRouter.post("/professor", ControllerProfessor.createProfessor);
ProfessorRouter.put('/professor', ControllerProfessor.updateProfessor);
ProfessorRouter.delete('/professor', ControllerProfessor.deleteProfessor);

export default ProfessorRouter;