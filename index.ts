import { Aluno, Professor, Grupo, Estande, Avaliacao } from '@prisma/client';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {


  const Professor = await prisma.professor.create({
    data: {
      id: '4',
      email: 'assasa@gamil.com',
      nome: 'asasasa'
    }
  });
  const Professor2 = await prisma.professor.create({
    data: {
      id: '5',
      email: 'ossoso@gamil.com',
      nome: 'osososo'
    }
  });


  const Grupo = await prisma.grupo.create({
    data: {
      id: '3',
      estandeId: '10'
    }
  });
  const Grupo2 = await prisma.grupo.create({
    data: {
      id: '2',
      estandeId: '11'
    }
  });



  const Aluno = await prisma.aluno.create({
      data: {
        id: '5',
        email: 'arthur@gmail.com',
        nome: 'Arthur',
        grupoId: '3'
      }
  });
  const Aluno2 = await prisma.aluno.create({
    data: {
      id: '4',
      email: 'caio@gmail.com',
      nome: 'Caio',
      grupoId: '2'
    }
});


  const Estande = await prisma.estande.create({
    data: {
      id: '10',
      grupoId: '3'
    }
  });
  const Estande2 = await prisma.estande.create({
    data: {
      id: '11',
      grupoId: '2'
    }
  });

  const Avaliacao = await prisma.avaliacao.create({
    data: {
      id: '1',
      estandeId: '10',
      notaApresentacao: 10,
      notaIdeia: 10,
      notaProjeto: 10
    }
  });

  const Avaliacao2 = await prisma.avaliacao.create({
    data: {
      id: '2',
      estandeId: '10',
      notaApresentacao: 8,
      notaIdeia: 10,
      notaProjeto: 9
    }
  });

  const Avaliacao3 = await prisma.avaliacao.create({
    data: {
      id: '3',
      estandeId: '11',
      notaApresentacao: 10,
      notaIdeia: 10,
      notaProjeto: 10
    }
  });

  const Avaliacao4 = await prisma.avaliacao.create({
    data: {
      id: '4',
      estandeId: '11',
      notaApresentacao: 8,
      notaIdeia: 10,
      notaProjeto: 9
    }
  });

  const Avaliacao5 = await prisma.avaliacao.create({
    data: {
      id: '5',
      estandeId: '10',
      notaApresentacao: 8,
      notaIdeia: 10,
      notaProjeto: 9
    }
  });



  console.log("Resgistro ok");


/* ---------------- */


  const updatedGrupo = await prisma.grupo.update({
  where: {
      id: '3'
    },
    data:{
      alunoLiderId: '5'
    }
  })
  const updatedGrupo2 = await prisma.grupo.update({
    where: {
        id: '2'
      },
      data:{
        alunoLiderId: '4'
      }
  })


const updatedAvaliacao = await prisma.avaliacao.update({
  where: {
    id: '1'
  },
  data:{
    alunoId: '5'
  }
})

const updatedAvaliacao2 = await prisma.avaliacao.update({
  where: {
    id: '2'
  },
  data:{
    professorId: '4'
  }
})

const updatedAvaliacao3 = await prisma.avaliacao.update({
  where: {
    id: '3'
  },
  data:{
    alunoId: '4'
  }
})

const updatedAvaliacao4 = await prisma.avaliacao.update({
  where: {
    id: '4'
  },
  data:{
    professorId: '4'
  }
})

const updatedAvaliacao5 = await prisma.avaliacao.update({
  where: {
    id: '5'
  },
  data:{
    professorId: '4'
  }
})
  
  console.log("Atualização dos dados ok");
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
