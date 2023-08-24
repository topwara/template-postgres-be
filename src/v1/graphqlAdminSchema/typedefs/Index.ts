// Lib
import { gql } from "apollo-server"

// About Index
const IndexSDL = gql`
  #

  type Query {
    #
    helloAdmin: HelloAdmin
  }

  #
`

export default IndexSDL
