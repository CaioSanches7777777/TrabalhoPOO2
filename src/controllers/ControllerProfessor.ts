import { Request, Response } from 'express';
import ProfessorService from '../services/ProfessorService'; 
import { Prisma } from '@prisma/client';

class ProfessorController {
    constructor(){
    }
        async listProfessores(req: Request, res: Response){
        const professor = await ProfessorService.listProfessores();
        res.render('professores', {professor:professor }) 
      }

      async createProfessor(req: Request, res: Response){
        const dados: Prisma.ProfessorCreateInput = req.body;
        if(dados.id !== "" && dados.email !== "" && dados.nome !== ""){
            const newProfessor = await ProfessorService.createProfessor(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newProfessor
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Erro'
            })
        }

    }


    async updateProfessor(req: Request, res: Response){
        res.send('Update professor');
    }

    async deleteProfessor(req: Request, res: Response){
        res.send('Delete professor');
    }
      


    }
export default new ProfessorController();