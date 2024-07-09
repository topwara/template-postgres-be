// Lib
import { IResolvers } from "@graphql-tools/utils"
import { UserRole } from "@prisma/client"

// Include in project
import prisma from "@prismaCall/client"
import { EResponseStatus, responseFormatGraphQL } from "@utils/http"
import { I_Context } from "@utils/interface"
import {
  E_Is_Active,
  MutationCreateUserRoleArgs,
  MutationUpdateUserRoleArgs,
  QueryUserRoleListArgs,
} from "../generated"
import { generateID } from "@v1/utils/other"

// ================================================================

// Query
const rootQuery: IResolvers = {
  //
  userRoleList: async (_parent, { filter }: QueryUserRoleListArgs, { context: userToken }: I_Context) => {
    console.log("===== START : userRoleList           =====")

    try {
      // Query
      const userRole = await prisma["userRole"].findMany({
        where: { roleID: filter.roleID || undefined },
        include: { user: true },
      })

      console.log("=====  END  : userRoleList : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { items: userRole })
    } catch (error) {
      console.log("=====  END  : userRoleList : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
}

// Mutation
const rootMutation: IResolvers = {
  //
  createUserRole: async (_parent, { input }: MutationCreateUserRoleArgs, { context: userToken }: I_Context) => {
    console.log("===== START : createUserRole           =====")

    try {
      // UserRole Items
      const userRoleItems: Partial<UserRole> = {
        ...input,

        // PK
        roleID: generateID("ROLE"),

        isActive: E_Is_Active.True,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      // Create UserRole
      await prisma["userRole"].create({ data: userRoleItems as UserRole })

      console.log("=====  END  : createUserRole : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { roleID: userRoleItems.roleID })
    } catch (error) {
      console.log("=====  END  : createUserRole : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
  //
  updateUserRole: async (_parent, { input }: MutationUpdateUserRoleArgs, { context: userToken }: I_Context) => {
    console.log("===== START : updateUserRole           =====")

    try {
      // Get
      const userRole = await prisma["userRole"].findFirst({
        where: { roleID: input.roleID },
      })

      // Validate
      if (!userRole) return responseFormatGraphQL(EResponseStatus.WARNING, { error: "userRole is not Exist" })

      // UserRole Items
      const userRoleItems: Partial<UserRole> = {
        ...input,
        updatedAt: new Date().toISOString(),
      }

      // Update UserRole
      await prisma["userRole"].update({
        where: { roleID: input.roleID },
        data: { ...userRoleItems },
      })

      console.log("=====  END  : updateUserRole : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { roleID: userRoleItems.roleID })
    } catch (error) {
      console.log("=====  END  : updateUserRole : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
  Mutation: rootMutation,
}
export default Resolver
