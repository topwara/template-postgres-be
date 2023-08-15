// Lib
import { gql } from "apollo-server"

// About User
const UserSDL = gql`
  #

  type User {
    id: String
    firstname: String
    surname: String
  }

  #
`

export default UserSDL
