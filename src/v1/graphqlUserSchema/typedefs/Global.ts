// Lib
import { gql } from "apollo-server"

// About Global
const GlobalSDL = gql`
  #
  scalar JSON

  enum E_IS_ACTIVE {
    TRUE
    FALSE
  }

  enum E_USER_ROLE_GLOBAL {
    USER
    ADMIN
  }

  #
`

export default GlobalSDL
