// Lib
import { gql } from "apollo-server"

// About HelloUser
const HelloUserSDL = gql`
  #

  type HelloUser {
    res_code: String
    res_desc: String

    says: String
  }

  #
`

export default HelloUserSDL
