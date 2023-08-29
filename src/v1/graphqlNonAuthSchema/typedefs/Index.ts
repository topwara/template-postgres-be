// Lib
import { gql } from "apollo-server"

// About Index
const IndexSDL = gql`
  #
  scalar JSON

  type Query {
    #
    helloNonAuth: HelloNonAuth

    #
    booksList: BookQuery

    #
    userList: UserQuery
  }

  type Mutation {
    #
    createUser(input: CreateUser): User
  }

  #
`

export default IndexSDL
