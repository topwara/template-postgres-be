-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleID_fkey";

-- DropIndex
DROP INDEX "User_roleID_key";

-- AlterTable
ALTER TABLE "UserRole" ALTER COLUMN "isActive" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_roleID_fkey" FOREIGN KEY ("roleID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
