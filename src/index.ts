// Lib
import * as express from "express"
import * as bodyParser from "body-parser"

// Import
//  => GraphQL
import handlerServerNonAuth from "@v1/graphql/handlerNonAuth"
import handlerServerAdmin from "@v1/graphql/handlerAdmin"
//  => Http
import adminLoginHandler from "@v1Controllers/adminLogin"
import userLoginHandler from "@v1Controllers/userLogin"

// ================================================================

// Function : Start Server
async function startServer() {
  // Referench : apollo-server-express with express.js and multiple (path) in project
  // => https://www.mongodb.com/community/forums/t/create-single-graphql-server-with-multiple-databases/146765

  try {
    // Craete express server
    const app = express()

    // Config the app to use bodyParser()
    app.use(bodyParser.urlencoded({ extended: true }))

    // Parse application/json
    app.use(bodyParser.json())

    // ========== START : HTTP    ==========
    app.post("/v1/auth/admin/login", async (req, res, next) => {
      res.send(await adminLoginHandler(req))
      next()
    })
    app.post("/v1/auth/user/login", async (req, res, next) => {
      res.send(await userLoginHandler(req))
      next()
    })
    // ==========  END  : HTTP    ==========

    // ========== START : GraphQL ==========
    // Declare route
    const serverAdmin = handlerServerAdmin
    const serverNonAuth = handlerServerNonAuth

    // Start server
    await serverAdmin.start()
    await serverNonAuth.start()

    // Config path :
    serverNonAuth.applyMiddleware({ app, path: "/v1/graphqlNonAuth" })
    serverAdmin.applyMiddleware({ app, path: "/v1/graphqlAdmin" })
    // ==========  END  : GraphQL ==========

    // Response console.log with pretty
    const responseLog = `
    ============ Welcome to template-postgres-be ============
    |
    | 🚀 Server ready at
    |     # HTTP Function
    |       -> 📧 http://localhost:3000/v1/auth/admin/login
    |       -> 📧 http://localhost:3000/v1/auth/user/login
    |     # GraphQL
    |       -> 👮 http://localhost:3000/v1/graphqlAdmin
    |       -> 👤 http://localhost:3000/v1/graphqlNonAuth
    |
    =========================================================
    `
    // Response
    app.listen({ port: 3000 }, () => console.log(responseLog))

    //
  } catch (error) {
    error(error)
  }
}

startServer()
