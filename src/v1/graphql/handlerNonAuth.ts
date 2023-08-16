// Lib
import { ApolloServer } from "apollo-server"
import { IResolvers } from "@graphql-tools/utils"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { GraphQLJSON } from "graphql-scalars"

// Include in project

// SDL #########################################################
import IndexSDL from "@v1GraphqlNonAuthSchema/typedefs/Index"
import BookSDL from "@v1GraphqlNonAuthSchema/typedefs/Book"
import UserSDL from "@v1GraphqlNonAuthSchema/typedefs/User"

// RESOLVERS ###################################################
import BookResolver from "@v1GraphqlNonAuthSchema/resolvers/Book.resolver"
import UserResolver from "@v1GraphqlNonAuthSchema/resolvers/User.resolver"
import { IApolloServerContext } from "src/interface/IApolloServerContext"
import prisma from "src/prisma/client"

// AUTH ########################################################
const typedefs = mergeTypeDefs([IndexSDL, BookSDL, UserSDL])

const resolvers = [
  BookResolver as IResolvers,
  UserResolver as IResolvers,
  {
    JSON: GraphQLJSON,
  },
]

const context: IApolloServerContext = {
  prisma,
}

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  context,
})

export default server
