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

    #
    userList(filter: UserFilter!): UserQuery
  }

  type Mutation {
    #
    createUserRole(input: CreateUserRole!): UserRole
    updateUserRole(input: UpdateUserRole!): UserRole

    #
    createUser(input: CreateUser!): User
    updateUser(input: UpdateUser!): User
  }

  #
`

export default IndexSDL
