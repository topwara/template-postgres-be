// Lib
import { IResolvers } from "@graphql-tools/utils"
import { I_Context } from "@utils/interface"

// Include in project
import prisma from "@prismaCall/client"
import { EResponseStatus, responseFormatGraphQL } from "@utils/http"

// ===========================================================

// Query
const rootQuery: IResolvers = {
  //
  helloUser: async (_parent, _args, { context: userToken }: I_Context) => {
    console.log("===== START : helloUser           =====")

    try {
      // Query
      const userRes = await prisma["user"].findFirst({
        where: { email: userToken.email },
        include: { role: true },
      })

      console.log("=====  END  : helloUser : Success =====")
      return responseFormatGraphQL(EResponseStatus.SUCCESS, userRes)
    } catch (error) {
      console.log("=====  END  : helloUser : Error   =====", error)
      return responseFormatGraphQL(EResponseStatus.ERROR, { error: error })
    }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
}
export default Resolver
