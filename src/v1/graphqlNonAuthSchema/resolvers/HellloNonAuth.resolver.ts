// Lib
import { IResolvers } from "@graphql-tools/utils"

// Include in project
import { EResponseStatus, responseFormatGraphQL } from "@utils/http"

// ================================================================

// Query
const rootQuery: IResolvers = {
  //
  helloNonAuth: (_parent, _args, _ctx, _info) => {
    return responseFormatGraphQL(EResponseStatus.SUCCESS, { says: "สวัสดีจ้า นอนอ๊อด" })
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
}
export default Resolver
