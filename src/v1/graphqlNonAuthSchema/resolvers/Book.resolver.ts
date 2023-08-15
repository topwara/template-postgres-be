import { Book } from "src/data/types/Book"
import { IResolvers } from "@graphql-tools/utils"

// Query
const rootQuery: IResolvers = {
  //
  booksList: (_parent, _args, _ctx, _info) => {
    const books: Book[] = [
      {
        id: 1,
        title: "The Awake",
        author: "Top",
      },
      {
        id: 2,
        title: "The Sleep",
        author: "Kob",
      },
      {
        id: 2,
        title: "ลุงโทนี่ นาฮี",
        author: "Kob",
      },
    ]
    return { res_code: "00", res_desc: "success", items: books }
  },
}

const Resolver: IResolvers = {
  Query: rootQuery,
}
export default Resolver
