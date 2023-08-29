// Lib
import { gql } from "apollo-server"

// About User
const UserSDL = gql`
  #

  # #######################  T Y P E  #######################

  type User {
    res_code: String
    res_desc: String

    # PK
    userID: String

    # elements
    roleID: String
    email: String
    isActive: E_IS_ACTIVE
    userRoleGlobal: E_USER_ROLE_GLOBAL
    name: String

    # time
    createdAt: String
    updatedAt: String

    # NestedRelation
    role: UserRole
  }

  type UserQuery {
    res_code: String
    res_desc: String
    items: [User]
  }

  # ####################### I N P U T #######################

  input CreateUser {
    roleID: String!
    email: String!
    name: String!
    password: String!
  }

  input UpdateUser {
    userID: String!
    isActive: E_IS_ACTIVE
    name: String
  }

  # ###################### F I L T E R ######################

  input UserFilter {
    userID: String
  }

  #
`

export default UserSDL
