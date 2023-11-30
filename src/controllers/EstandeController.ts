import { Request, Response } from 'express';
import EstandeService from '../services/EstandeService';
import { Prisma } from '@prisma/client';

class EstandeController {
    constructor(){
    }
        async listEstandes(req: Request, res: Response){
        const estande = await EstandeService.listEstandes();
        res.render('estandes', {estande:estande }) 
      }

      async createEstandes(req: Request, res: Response){
        const dados: Prisma.EstandeCreateInput = req.body;
        if(dados.id !== "" && dados.grupo){
            const newEstande = await EstandeService.createEstandes(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newEstande
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Erro'
            })
        }

    }
    async updateEstandes(req: Request, res: Response){
        res.send('Update estande');
    }

    async deleteEstandes(req: Request, res: Response){
        res.send('Delete estande');
    }
      
}
export default new EstandeController();