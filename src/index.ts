// Lib

// Import
import handlerNonAuth from "../src/v1/graphql/handlerNonAuth"

//
// const server = new ApolloServer({ schema: schema });

//
handlerNonAuth
  .listen({ port: 3000 })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}graphql`))
  .catch((error) => console.log(`Error ${error}`))
