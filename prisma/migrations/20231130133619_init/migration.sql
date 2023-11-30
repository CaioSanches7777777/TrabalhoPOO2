/*
  Warnings:

  - You are about to drop the column `alunoId` on the `Grupo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "grupoId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("created_at", "email", "grupoId", "id", "nome", "updated_at") SELECT "created_at", "email", "grupoId", "id", "nome", "updated_at" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "professorId" TEXT,
    "alunoId" TEXT,
    "estandeId" TEXT,
    "notaIdeia" INTEGER NOT NULL,
    "notaProjeto" INTEGER NOT NULL,
    "notaApresentacao" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_estandeId_fkey" FOREIGN KEY ("estandeId") REFERENCES "Estande" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("created_at", "estandeId", "id", "notaApresentacao", "notaIdeia", "notaProjeto", "updated_at") SELECT "created_at", "estandeId", "id", "notaApresentacao", "notaIdeia", "notaProjeto", "updated_at" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_estandeId_professorId_key" ON "Avaliacao"("estandeId", "professorId");
CREATE UNIQUE INDEX "Avaliacao_estandeId_alunoId_key" ON "Avaliacao"("estandeId", "alunoId");
CREATE TABLE "new_Estande" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "grupoId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Estande_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Estande" ("created_at", "grupoId", "id", "updated_at") SELECT "created_at", "grupoId", "id", "updated_at" FROM "Estande";
DROP TABLE "Estande";
ALTER TABLE "new_Estande" RENAME TO "Estande";
CREATE UNIQUE INDEX "Estande_grupoId_key" ON "Estande"("grupoId");
CREATE TABLE "new_Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alunoLiderId" TEXT,
    "estandeId" TEXT,
    CONSTRAINT "Grupo_alunoLiderId_fkey" FOREIGN KEY ("alunoLiderId") REFERENCES "Aluno" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Grupo" ("estandeId", "id") SELECT "estandeId", "id" FROM "Grupo";
DROP TABLE "Grupo";
ALTER TABLE "new_Grupo" RENAME TO "Grupo";
CREATE UNIQUE INDEX "Grupo_alunoLiderId_key" ON "Grupo"("alunoLiderId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
