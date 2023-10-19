-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "grupoId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alunoId" TEXT NOT NULL,
    "estandeId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Grupo_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "grupoId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Estande_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "estandeId" TEXT NOT NULL,
    "notaIdeia" INTEGER NOT NULL,
    "notaProjeto" INTEGER NOT NULL,
    "notaApresentacao" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Avaliacao_estandeId_fkey" FOREIGN KEY ("estandeId") REFERENCES "Estande" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_alunoId_key" ON "Grupo"("alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "Estande_grupoId_key" ON "Estande"("grupoId");

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_estandeId_key" ON "Avaliacao"("estandeId");
