import { Aluno, Avaliacao, Estande, Grupo, PrismaClient, Professor } from '@prisma/client'

const prisma = new PrismaClient()

const created_at = new Date();
const updated_at = new Date();

let aluno : Aluno = {
    id: "",
    email: "",
    nome: "",
    grupoId: "",
    created_at,
    updated_at,
}

let professor : Professor = {
    id: "",
    email: "",
    nome: "",
    created_at,
    updated_at,
}

let avaliacao : Avaliacao = {
    id: "",
    estandeId: "",
    notaApresentacao: 0,
    notaIdeia: 0,
    notaProjeto: 0,
    created_at,
    updated_at,
}

let estande : Estande = {
    id: "",
    grupoId: "",
    created_at,
    updated_at,
}

let grupo : Grupo = {
    id: "",
    alunoId: "",
    estandeId: "",
}

