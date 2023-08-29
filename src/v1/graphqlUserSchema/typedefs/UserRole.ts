// Lib
import { gql } from "apollo-server"

// About UserRole
const UserRoleSDL = gql`
  #

  # #######################  T Y P E  #######################

  type UserRole {
    res_code: String
    res_desc: String

    # PK
    roleID: String

    # elements
    name: String
    desc: String
    isActive: E_IS_ACTIVE

    # time
    createdAt: String
    updatedAt: String
  }

  type UserRoleQuery {
    res_code: String
    res_desc: String
    items: [UserRole]
  }

  # ####################### I N P U T #######################

  # ###################### F I L T E R ######################

  #
`

export default UserRoleSDL
