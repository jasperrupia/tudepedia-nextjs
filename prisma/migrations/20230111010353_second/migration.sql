/*
  Warnings:

  - You are about to drop the `EmailNewsletter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "EmailNewsletter";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "newsletter" TEXT NOT NULL
);
