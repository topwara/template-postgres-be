// Lib
import { gql } from "apollo-server"

// About HelloUser
const HelloUserSDL = gql`
  #

  type HelloUser {
    res_code: String
    res_desc: String

    # PK
    userID: String

    # elements
    email: String
    isActive: E_IS_ACTIVE
    userRoleGlobal: E_USER_ROLE_GLOBAL
    name: String
    roleID: String

    # time
    createdAt: String
    updatedAt: String

    # NestedRelation
    role: UserRole
  }

  #
`

export default HelloUserSDL
