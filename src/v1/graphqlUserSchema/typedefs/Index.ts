// Lib
import { gql } from "apollo-server"

// About Index
const IndexSDL = gql`
  #

  type Query {
    #
    helloUser: HelloUser
  }

  #
`

export default IndexSDL
