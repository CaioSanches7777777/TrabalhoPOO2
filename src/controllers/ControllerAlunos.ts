import { Request, Response } from 'express';
import AlunosService from '../services/AlunosService';
import { Prisma } from '@prisma/client';
class AlunoController {
    constructor(){
    
    }
        async listAlunos(req: Request, res: Response){
        const alunos = await AlunosService.listAlunos();
        res.render('alunos', {alunos:alunos }) 
      }


      async createAluno(req: Request, res: Response){
        const dados: Prisma.AlunoCreateInput = req.body;
        
        if( dados.id !== "" &&  dados.email !== "" && dados.nome !== ""){
            const newAluno = await AlunosService.createAluno(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newAluno
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Erro'
            })
        }

    }

      
    async updateAluno(req: Request, res: Response){
        res.send('Update aluno');
    }

    async deleteAluno(req: Request, res: Response){
        res.send('Delete aluno');
    }
      

      

}
export default new AlunoController();