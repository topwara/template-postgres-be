// Lib
import { gql } from "apollo-server"

// About Book
const BookSDL = gql`
  #

  type Book {
    id: String
    title: String
    author: String
  }

  type BookQuery {
    res_code: String
    res_desc: String
    items: [Book]
  }

  #
`

export default BookSDL
