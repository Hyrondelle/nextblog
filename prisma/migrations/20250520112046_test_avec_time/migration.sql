/*
  Warnings:

  - The `createdAt` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP;
