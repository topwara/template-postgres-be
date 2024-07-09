// Lib
import * as express from "express"
import { ApolloServer, ExpressContext } from "apollo-server-express"
import { IResolvers } from "@graphql-tools/utils"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { GraphQLJSON } from "graphql-scalars"

// Include in project
import { authAdminMiddlewareFunction } from "@middleware/handler"

// SDL #########################################################
import GlobalSDL from "@v1GraphqlAdminSchema/typedefs/Global"
import IndexSDL from "@v1GraphqlAdminSchema/typedefs/Index"
import HelloAdminSDL from "@v1GraphqlAdminSchema/typedefs/HelloAdmin"
import UserRoleSDL from "@v1GraphqlAdminSchema/typedefs/UserRole"
import UserSDL from "@v1GraphqlAdminSchema/typedefs/User"

// RESOLVERS ###################################################
import HelloAdminResolver from "@v1GraphqlAdminSchema/resolvers/HelloAdmin.resolver"
import UserRoleResolver from "@v1GraphqlAdminSchema/resolvers/UserRole.resolver"
import UserResolver from "@v1GraphqlAdminSchema/resolvers/User.resolver"

// AUTH ########################################################
const typedefs = mergeTypeDefs([GlobalSDL, IndexSDL, HelloAdminSDL, UserRoleSDL, UserSDL])

const resolvers = [
  HelloAdminResolver as IResolvers,
  UserRoleResolver as IResolvers,
  UserResolver as IResolvers,
  {
    JSON: GraphQLJSON,
  },
]

const server: ApolloServer<ExpressContext> = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  context: authAdminMiddlewareFunction,
})

const app = express()
const startServer = async () => {
  await server.start()
  server.applyMiddleware({ app, path: "/graphqlAdmin" })
}
startServer()

export default app
