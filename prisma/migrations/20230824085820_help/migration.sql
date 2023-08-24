/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `UserRole` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userID` to the `UserRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleID_fkey";

-- AlterTable
ALTER TABLE "UserRole" ADD COLUMN     "userID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userID_key" ON "UserRole"("userID");

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
