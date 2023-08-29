// Lib
import { PrismaClient } from "@prisma/client"
// Include
import { UserSeed } from "./seeder/user"
import { UserRoleSeed } from "./seeder/userRole"

// ===================================================

const prisma = new PrismaClient()

async function seedLikeMock() {
  // 1.
  const userRole = await prisma["userRole"].createMany({ data: UserRoleSeed })
  console.log("🟠 === SEED === USER_ROLE       ===> ", userRole)

  // 2.
  const user = await prisma["user"].createMany({ data: UserSeed })
  console.log("🟠 === SEED === USER            ===> ", user)
}

// ===================================================

seedLikeMock()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
