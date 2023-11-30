import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';
const prisma = new PrismaClient()

class GrupoServices {
    constructor(){}

    async listGrupos(){
        try{
            const grupos = await prisma.grupo.findMany();
            return grupos;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createGrupos(grupo: Prisma.GrupoCreateInput){
        try{
            const newGrupos = await prisma.grupo.create({
                data: grupo
            });
            return newGrupos;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async updateGrupo(id: string, grupo: Prisma.GrupoUpdateInput){
        try{
            const updatedGrupo = await prisma.grupo.update({
                where: {
                    id
                },
                data: grupo
            });

            return updatedGrupo;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    
    async deleteGrupo(id: string){
        try{
            if(!id){
                return console.log("Precisa de um id para deletar um grupo")
            }
            await prisma.grupo.delete({
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





export default new GrupoServices();