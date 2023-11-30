import { Request, Response } from 'express';
import AvaliacaoService from '../services/AvaliacaoService';
import { Prisma } from '@prisma/client';
class AvaliacaoController {
    constructor(){
    }
        async listAvaliacao(req: Request, res: Response){
        const avaliacao = await AvaliacaoService.listAvaliacoes();
        res.render('avaliacao', {avaliacao:avaliacao }) 
      }

      async createAvaliacao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        if( dados.id !== "" &&  dados.notaApresentacao !== 0  && dados.notaIdeia !== 0 && dados.notaProjeto !== 0){
            const newAvaliacao = await AvaliacaoService.createAvalicao(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Erro'
            })
        }

    }

    async updateAvaliacao(req: Request, res: Response){
        res.send('Update avaliação');
    }

    async deleteAvaliacao(req: Request, res: Response){
        res.send('Delete avaliação');
    }
      
}
export default new AvaliacaoController();