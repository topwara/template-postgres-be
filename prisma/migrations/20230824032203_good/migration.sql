/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userRoleGlobal` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "age",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "isActive" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL,
ADD COLUMN     "userRoleGlobal" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userID");

-- DropTable
DROP TABLE "Book";
