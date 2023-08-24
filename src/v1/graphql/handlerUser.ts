// Lib
import { ApolloServer } from "apollo-server-express"
import { IResolvers } from "@graphql-tools/utils"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { GraphQLJSON } from "graphql-scalars"

// Include in project
import { authUserMiddlewareFunction } from "@middleware/handler"

// SDL #########################################################
import GlobalSDL from "@v1GraphqlUserSchema/typedefs/Global"
import IndexSDL from "@v1GraphqlUserSchema/typedefs/Index"
import HelloUserSDL from "@v1GraphqlUserSchema/typedefs/HelloUser"
import UserRoleSDL from "@v1GraphqlAdminSchema/typedefs/UserRole"

// RESOLVERS ###################################################
import HelloUserResolver from "@v1GraphqlUserSchema/resolvers/HelloUser.resolver"

// AUTH ########################################################
const typedefs = mergeTypeDefs([GlobalSDL, IndexSDL, HelloUserSDL, UserRoleSDL])

const resolvers = [
  HelloUserResolver as IResolvers,
  {
    JSON: GraphQLJSON,
  },
]

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  context: authUserMiddlewareFunction,
})

export default server
