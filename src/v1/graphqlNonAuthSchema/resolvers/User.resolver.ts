import { IResolvers } from "@graphql-tools/utils"

// Query
const rootQuery: IResolvers = {
  //
  userInfo: (_parent, _args, _ctx, _info) => {
    const user = {
      id: 4,
      firstname: "Waraporn",
      surname: "PomnongsanJa",
    }
    return user
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
}
export default Resolver
