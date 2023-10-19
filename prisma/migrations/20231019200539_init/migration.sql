/*
  Warnings:

  - You are about to drop the column `created_at` on the `Grupo` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Grupo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alunoId" TEXT NOT NULL,
    "estandeId" TEXT NOT NULL,
    CONSTRAINT "Grupo_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Grupo" ("alunoId", "estandeId", "id") SELECT "alunoId", "estandeId", "id" FROM "Grupo";
DROP TABLE "Grupo";
ALTER TABLE "new_Grupo" RENAME TO "Grupo";
CREATE UNIQUE INDEX "Grupo_alunoId_key" ON "Grupo"("alunoId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
