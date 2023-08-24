// Lib
import { ApolloServer } from "apollo-server-express"
import { IResolvers } from "@graphql-tools/utils"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { GraphQLJSON } from "graphql-scalars"

// Include in project
import { authAdminMiddlewareFunction } from "@middleware/handler"

// SDL #########################################################
import GlobalSDL from "@v1/graphqlAdminSchema/typedefs/Global"
import IndexSDL from "@v1GraphqlAdminSchema/typedefs/Index"
import HelloAdminSDL from "@v1GraphqlAdminSchema/typedefs/HelloAdmin"
import UserRoleSDL from "@v1/graphqlAdminSchema/typedefs/UserRole"

// RESOLVERS ###################################################
import HelloAdminResolver from "@v1GraphqlAdminSchema/resolvers/HelloAdmin.resolver"
import UserRoleResolver from "@v1GraphqlAdminSchema/resolvers/UserRole.resolver"

// AUTH ########################################################
const typedefs = mergeTypeDefs([GlobalSDL, IndexSDL, HelloAdminSDL, UserRoleSDL])

const resolvers = [
  HelloAdminResolver as IResolvers,
  UserRoleResolver as IResolvers,
  {
    JSON: GraphQLJSON,
  },
]

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  context: authAdminMiddlewareFunction,
})

export default server
