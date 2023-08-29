import { IResolvers } from "@graphql-tools/utils"
import prisma from "@prismaCall/client"
import { EResponseStatus, responseFormatGraphQL } from "@utils/http"
import { I_Context, I_User } from "@utils/interface"

// Query
const rootQuery: IResolvers = {
  //
  helloUser: async (_parent, _args, { context: userToken }: I_Context) => {
    console.log("===== START : helloUser           =====")

    try {
      // Query
      const userRes: I_User & { role: Record<string, any> } = await prisma["user"].findFirst({
        where: {
          email: userToken.email,
        },
        include: {
          role: {},
        },
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
