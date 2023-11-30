import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';
const prisma = new PrismaClient()

class ProfessorServices {
    constructor(){}

    async listProfessores(){
        try{
            const professores = await prisma.professor.findMany();
            return professores;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createProfessor(professor: Prisma.ProfessorCreateInput){
        try{
            const newProfessor = await prisma.professor.create({
                data: professor
            });
            return newProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async updateProfessor(id: string, professor: Prisma.ProfessorUpdateInput){
        try{
            const updatedProfessor = await prisma.professor.update({
                where: {
                    id
                },
                data: professor
            });

            return updatedProfessor;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    
    async deleteProfessor(id: string){
        try{
            if(!id){
                return console.log("Precisa de um id para deletar um usuário")
            }
            await prisma.professor.delete({
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



export default new ProfessorServices();