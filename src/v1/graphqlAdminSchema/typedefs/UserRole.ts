// Lib
import { gql } from "apollo-server"

// About UserRole
const UserRoleSDL = gql`
  #

  type UserRole {
    res_code: String
    res_desc: String

    # PK
    roleID: String

    # elements
    name: String
    desc: String

    # time
    createdAt: String
    updatedAt: String
  }

  #
`

export default UserRoleSDL
