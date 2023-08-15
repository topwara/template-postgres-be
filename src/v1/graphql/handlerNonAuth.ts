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

// AUTH ########################################################
const typedefs = mergeTypeDefs([IndexSDL, BookSDL, UserSDL])

const resolvers = [
  BookResolver as IResolvers,
  UserResolver as IResolvers,
  {
    JSON: GraphQLJSON,
  },
]

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
})

export default server
