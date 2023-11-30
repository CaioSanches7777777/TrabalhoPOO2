import { Request, Response } from 'express';
import GruposService from '../services/GrupoService';
import { Prisma } from '@prisma/client';

class GrupoController {
    constructor(){
    }
        async listGrupos(req: Request, res: Response){
        const grupos = await GruposService.listGrupos();
        res.render('grupos', {grupos:grupos }) 
      }

      async createGrupo(req: Request, res: Response){
        const dados: Prisma.GrupoCreateInput = req.body;
        if( dados.id !== "" && dados.estandeId !== ""){
            const newGrupos = await GruposService.createGrupos(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newGrupos
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Erro'
            })
        }

    }

    async updateGrupo(req: Request, res: Response){
        res.send('Update grupo');
    }

    async deleteGrupo(req: Request, res: Response){
        res.send('Delete grupo');
    }
      
      
}
export default new GrupoController();