import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';

const prisma = new PrismaClient()

class EstandeServices {
    constructor(){}

    async listEstandes(){
        try{
            const estande = await prisma.estande.findMany();
            return estande;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async createEstandes(estande: Prisma.EstandeCreateInput){
        try{
            const newEstande = await prisma.estande.create({
                data: estande
            });
            return newEstande;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async updateEstande(id: string, estande: Prisma.EstandeUpdateInput){
        try{
            const updatedEstande = await prisma.estande.update({
                where: {
                    id
                },
                data: estande
            });

            return updatedEstande;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    
    async deleteEstande(id: string){
        try{
            if(!id){
                return console.log("Precisa de um id para deletar um estande")
            }
            await prisma.estande.delete({
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




export default new EstandeServices();