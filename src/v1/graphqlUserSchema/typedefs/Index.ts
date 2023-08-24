// Lib
import { gql } from "apollo-server"

// About Index
const IndexSDL = gql`
  #
  scalar JSON

  type Query {
    #
    helloUser: HelloUser
  }

  #
`

export default IndexSDL
