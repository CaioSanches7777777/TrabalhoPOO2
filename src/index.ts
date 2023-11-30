import { Aluno, Professor, Grupo, Estande, Avaliacao } from '@prisma/client';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  


 const professor = await prisma.professor.create({
    data: {
      id: '10',
      email: 'Abrantes@uvv.br',
      nome: 'Abrantes'
    }
  })
    
 

 const Grupo = await prisma.grupo.create({
      data: {
        id:'15',
        estandeId: '15'
      }
    });
    

    const Grupo2 = await prisma.grupo.create({
      data: {
        id:'1',
        estandeId: '1'
      }
    }); 
   


   
 const estande = await prisma.estande.create({
      data: {
        id: '15',
        grupoId:'15'
        
      }
    });
    
    
   const estande2 = await prisma.estande.create({
      data: {
        id: '2',
        grupoId:'2'
      }
    }); 


const aluno = await prisma.aluno.create({
  data: {
    id: '10',
    email: 'Pedro@gmail.com',
    nome: 'Pedro',
    grupoId: '15',

  }
});

const aluno2 = await prisma.aluno.create({
  data: {
    id: '11',
    email: 'Mateus@gmail.com',
    nome: 'Mateus',
    grupoId: '15'
    
  }
});
    
  const avaliacao = await prisma.avaliacao.create({
    data: {
      id: '2',
      estandeId: '15',
      notaApresentacao: 10,
      notaIdeia: 10,
      notaProjeto: 10,
      alunoId:'10'
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