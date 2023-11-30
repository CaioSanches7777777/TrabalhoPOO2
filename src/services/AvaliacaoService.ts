import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';
const prisma = new PrismaClient()

class AvaliacaoServices {
    constructor(){}

    async listAvaliacoes(){
        try{
            const avaliacao = await prisma.avaliacao.findMany();
            return avaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async createAvalicao(avaliacao: Prisma.AvaliacaoCreateInput){
        try{
            const newAvaliacao = await prisma.avaliacao.create({
                data: avaliacao
            });
            return newAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async updateAvaliacao(id: string, avaliacao: Prisma.AvaliacaoUpdateInput){
        try{
            const updatedAvaliacao = await prisma.avaliacao.update({
                where: {
                    id
                },
                data: avaliacao
            });

            return updatedAvaliacao;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async deleteAvaliacao(id: string){
        try{
            if(!id){
                return console.log("Precisa de um id para deletar uma avaliação")
            }
            await prisma.avaliacao.delete({
                where:{
                    id
                }
            })

        }catch(error){
            console.log(error);
            return null;
        }
    }

}




export default new AvaliacaoServices();