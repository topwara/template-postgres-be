// Lib
import { gql } from "apollo-server"

// About HelloNonAuth
const HelloNonAuthSDL = gql`
  #

  type HelloNonAuth {
    res_code: String
    res_desc: String

    says: String
  }

  #
`

export default HelloNonAuthSDL
