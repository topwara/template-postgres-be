// Lib
import * as bodyParser from "body-parser"
import * as express from "express"
import * as cors from "cors"

// Import
import * as functionsHandlers from "@v1Routes/handler"

// ============================ app.ts ============================

// create express server
const app = express()

// express config
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({ origin: "*" }))
app.use(bodyParser.urlencoded({ extended: true }))

// loop route path
Object.entries(functionsHandlers).map(([name, handler]) => app.all(`/${name}`, handler as any))

//
export default app
