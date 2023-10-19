import { Aluno, Professor, Grupo, Estande, Avaliacao } from '@prisma/client';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  

    const grupo = await prisma.grupo.create({
        data: {
          id: '3',
          alunoId: '5',
          estandeId: '10'
        }
      });

      const aluno = await prisma.aluno.create({
        data: {
          id: '5',
          email: 'arthur@gmail.com',
          nome: 'Arthur',
          grupoId: '3'
        }
      });

  const professor = await prisma.professor.create({
    data: {
      id: '4',
      email: 'professor@gmail.com',
      nome: 'professor'
    }
  });

  const avaliacao = await prisma.avaliacao.create({
    data: {
      id: '1',
      estandeId: '10',
      notaApresentacao: 10,
      notaIdeia: 10,
      notaProjeto: 10
    }
  });
  
  

  const estande = await prisma.estande.create({
    data: {
      id: '10',
      grupoId: '3'
    }
  });




  console.log("Resgistro ok");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
  });
