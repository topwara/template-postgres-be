// Lib
import { gql } from "apollo-server"

// About Index
const IndexSDL = gql`
  #
  scalar JSON

  type Query {
    #
    booksList: BookQuery

    #
    userInfo: User
  }

  #
`

export default IndexSDL
