// Lib
import * as bcrypt from "bcryptjs"
import { IResolvers } from "@graphql-tools/utils"
import { User } from "@prisma/client"

// Include in project
import prisma from "@prismaCall/client"
import { EResponseStatus, responseFormatGraphQL } from "@utils/http"
import { E_User_Role_Global, I_Context } from "@utils/interface"
import { E_Is_Active, MutationCreateUserArgs, MutationUpdateUserArgs, QueryUserListArgs } from "../generated"
import { generateID } from "@v1/utils/other"

// ================================================================

// Query
const rootQuery: IResolvers = {
  //
  userList: async (_parent, { filter }: QueryUserListArgs, { context: userToken }: I_Context) => {
    console.log("===== START : userList           =====")

    try {
      // Query
      const userList = await prisma["user"].findMany({
        where: { userID: filter.userID || undefined },
        include: { role: true },
      })

      console.log("=====  END  : userList : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { items: userList })
    } catch (error) {
      console.log("=====  END  : userList : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
}

// Mutation
const rootMutation: IResolvers = {
  //
  createUser: async (_parent, { input }: MutationCreateUserArgs, { context: userToken }: I_Context) => {
    console.log("===== START : createUser           =====")

    try {
      // Get : UserRole
      const userRole = await prisma["userRole"].findFirst({ where: { roleID: input.roleID } })

      // Validate : UserRole
      if (!userRole) return responseFormatGraphQL(EResponseStatus.WARNING, { error: "userRole is not Exist" })

      // Get : User
      const userGet = await prisma["user"].findFirst({ where: { email: input.email } })

      // Validate : UserRole
      if (userGet) return responseFormatGraphQL(EResponseStatus.WARNING, { error: "user email is Exist" })

      // User Items
      const userItems: User & { password: string } = {
        ...input,

        // PK
        userID: generateID("USR"),

        isActive: E_Is_Active.True,
        userRoleGlobal: E_User_Role_Global.User,
        passwordHash: await bcrypt.hash(input.password, 10),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      delete userItems.password

      // Create User
      await prisma["user"].create({ data: userItems })

      console.log("=====  END  : createUser : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { userID: userItems.userID })
    } catch (error) {
      console.log("=====  END  : createUser : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
  //
  updateUser: async (_parent, { input }: MutationUpdateUserArgs, { context: userToken }: I_Context) => {
    console.log("===== START : updateUser           =====")

    try {
      // Get : User
      const userGet = await prisma["user"].findFirst({ where: { userID: input.userID } })

      // Validate : UserRole
      if (!userGet) return responseFormatGraphQL(EResponseStatus.WARNING, { error: "user is not Exist" })

      // User Items
      const userItems: Partial<User> = {
        ...input,

        updatedAt: new Date().toISOString(),
      }

      // Update User
      await prisma["user"].update({
        where: { userID: input.userID },
        data: { ...userItems },
      })

      console.log("=====  END  : updateUser : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { userID: userItems.userID })
    } catch (error) {
      console.log("=====  END  : updateUser : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
  Mutation: rootMutation,
}
export default Resolver
