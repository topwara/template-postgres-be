import { IResolvers } from "@graphql-tools/utils"

// Query
const rootQuery: IResolvers = {
  //
  helloUser: (_parent, _args, event) => {
    console.log("_parent => ", _parent)
    console.log("event", event)

    return { res_code: "00", res_desc: "success", says: "สวัสดีจ้า ยูเซอร์" }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
}
export default Resolver
