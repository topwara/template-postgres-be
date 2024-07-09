// Lib
import * as express from "express"
import { ApolloServer, ExpressContext } from "apollo-server-express"
import { IResolvers } from "@graphql-tools/utils"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { GraphQLJSON } from "graphql-scalars"

// SDL #########################################################
import IndexSDL from "@v1GraphqlNonAuthSchema/typedefs/Index"
import UserSDL from "@v1GraphqlNonAuthSchema/typedefs/User"
import HelloNonAuthSDL from "@v1GraphqlNonAuthSchema/typedefs/HelloNonAuth"

// RESOLVERS ###################################################
import UserResolver from "@v1GraphqlNonAuthSchema/resolvers/User.resolver"
import HelloNonAuthResolver from "@v1GraphqlNonAuthSchema/resolvers/HellloNonAuth.resolver"

// AUTH ########################################################
const typedefs = mergeTypeDefs([IndexSDL, HelloNonAuthSDL, UserSDL])

const resolvers = [
  UserResolver as IResolvers,
  HelloNonAuthResolver as IResolvers,
  {
    JSON: GraphQLJSON,
  },
]

const server: ApolloServer<ExpressContext> = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
})

const app = express()
const startServer = async () => {
  await server.start()
  server.applyMiddleware({ app, path: "/graphqlNonAuth" })
}
startServer()

export default app
