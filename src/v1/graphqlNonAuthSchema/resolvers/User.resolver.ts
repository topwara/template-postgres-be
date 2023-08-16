import { IResolvers } from "@graphql-tools/utils"
import { getAllUsers, createUser } from "src/data/userService"

// Query
const rootQuery: IResolvers = {
  //
  userList: async (_parent, _args, _ctx, _info) => {
    const res = { res_code: "00", res_desc: "success", items: await getAllUsers() }
    return res
  },
}

// Mutation
const rootMutation: IResolvers = {
  //
  createUser: async (_parent, _args, _ctx, _info) => {
    console.log("🟡 _args => ", _args)

    const userItems = {
      id: new Date().toISOString(),
      ..._args.input,
    }
    const call = await createUser(userItems)
    console.log("call => ", call)

    return { res_code: "00", res_desc: "success", ...userItems }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
  Mutation: rootMutation,
}
export default Resolver
