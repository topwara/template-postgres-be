// Lib
import { IResolvers } from "@graphql-tools/utils"
import { Prisma } from "@prisma/client"
import { MutationCreateUserArgs } from "@v1GraphqlNonAuthSchema/generated"

// Include in project
import prisma from "src/prisma/client"
import { EResponseStatus, responseFormatGraphQL } from "@utils/http"

// ===========================================================

// Query
const rootQuery: IResolvers = {
  //
  userList: async (_parent, _args, _ctx) => {
    console.log("===== START | userList =====")

    try {
      //
      const userRes = await prisma.user.findMany()

      console.log("=====  END  | userList ===== | Success")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, { items: userRes })
    } catch (error) {
      console.log("=====  END  | userList ===== | Error  ", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, error)
    }
  },
}

// Mutation
const rootMutation: IResolvers = {
  //
  createUser: async (_parent, { input }: MutationCreateUserArgs, _ctx) => {
    console.log("===== START | createUser =====")

    try {
      //
      const userItems = {
        id: Date.now().toString(),
        ...input,
      }

      //
      const userParams: Prisma.UserCreateArgs = { data: userItems as any }

      //
      await prisma.user.create(userParams)

      console.log("=====  END  | createUser ===== | Success")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, userItems)
    } catch (error) {
      console.log("=====  END  | createUser ===== | Error  ", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, error)
    }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
  Mutation: rootMutation,
}
export default Resolver
