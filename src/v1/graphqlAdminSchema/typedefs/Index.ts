// Lib
import { gql } from "apollo-server"

// About Index
const IndexSDL = gql`
  #

  type Query {
    #
    helloAdmin: HelloAdmin

    #
    userRoleList(filter: UserRoleFilter!): UserRoleQuery
  }

  type Mutation {
    #
    createUserRole(input: CreateUserRole!): UserRole
    updateUserRole(input: UpdateUserRole!): UserRole
  }

  #
`

export default IndexSDL
