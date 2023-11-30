import { Router } from "express";
import PrincipalController from "../controllers/PrincipalController";

const RotaPrincipal = Router();

RotaPrincipal.get('/principal', PrincipalController.PaginaPrincipal);

export default RotaPrincipal;