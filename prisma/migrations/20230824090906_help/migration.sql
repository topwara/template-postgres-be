/*
  Warnings:

  - You are about to drop the column `userID` on the `UserRole` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roleID]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userID_fkey";

-- DropIndex
DROP INDEX "UserRole_userID_key";

-- AlterTable
ALTER TABLE "UserRole" DROP COLUMN "userID";

-- CreateIndex
CREATE UNIQUE INDEX "User_roleID_key" ON "User"("roleID");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleID_fkey" FOREIGN KEY ("roleID") REFERENCES "UserRole"("roleID") ON DELETE RESTRICT ON UPDATE CASCADE;
