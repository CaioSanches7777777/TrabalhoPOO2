import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';
const prisma = new PrismaClient()

class AlunosServices {
    constructor(){}

    async listAlunos(){
        try{
            const alunos = await prisma.aluno.findMany();
            return alunos;
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async createAluno(aluno: Prisma.AlunoCreateInput){
        try{
            const newAluno = await prisma.aluno.create({
                data: aluno
            });
            return newAluno;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async updateAluno(id: string, aluno: Prisma.AlunoUpdateInput){
        try{
            const updatedAluno = await prisma.aluno.update({
                where: {
                    id
                },
                data: aluno
            });

            return updatedAluno;
        }catch(error){
            console.log(error);
            return null;
        }
    }


    async deleteAluno(id: string){
        try{
            if(!id){
                return console.log("Precisa de um id para deletar um usuário")
            }
            await prisma.aluno.delete({
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




export default new AlunosServices();