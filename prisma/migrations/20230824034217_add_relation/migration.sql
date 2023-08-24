/*
  Warnings:

  - You are about to drop the column `fullname` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleID]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "fullname",
ADD COLUMN     "createdAt" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "roleID" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserRole" (
    "roleID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("roleID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_roleID_key" ON "User"("roleID");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleID_fkey" FOREIGN KEY ("roleID") REFERENCES "UserRole"("roleID") ON DELETE RESTRICT ON UPDATE CASCADE;
