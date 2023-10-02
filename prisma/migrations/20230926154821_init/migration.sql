/*
  Warnings:

  - You are about to drop the column `professorId` on the `Avaliacao` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "estandeId" TEXT NOT NULL,
    "notaIdeia" INTEGER NOT NULL,
    "notaProjeto" INTEGER NOT NULL,
    "notaApresentacao" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Avaliacao_estandeId_fkey" FOREIGN KEY ("estandeId") REFERENCES "Estande" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("created_at", "estandeId", "id", "notaApresentacao", "notaIdeia", "notaProjeto", "updated_at") SELECT "created_at", "estandeId", "id", "notaApresentacao", "notaIdeia", "notaProjeto", "updated_at" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_estandeId_key" ON "Avaliacao"("estandeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
