// Lib
import { gql } from "apollo-server"

// About User
const UserSDL = gql`
  #

  type User {
    res_code: String
    res_desc: String

    id: String
    name: String
    age: Int
  }

  type UserQuery {
    res_code: String
    res_desc: String
    items: [User]
  }

  input CreateUser {
    name: String!
    age: Int!
  }

  #
`

export default UserSDL
