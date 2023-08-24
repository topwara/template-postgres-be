import { IResolvers } from "@graphql-tools/utils"

// Query
const rootQuery: IResolvers = {
  //
  helloNonAuth: (_parent, _args, _ctx, _info) => {
    return { res_code: "00", res_desc: "success", says: "สวัสดีจ้า นอนอ๊อด" }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
}
export default Resolver
