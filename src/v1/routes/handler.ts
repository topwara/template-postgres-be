// Lib
import type { Request as ExpressRequest, Response } from "express"

// Import
import { adminLoginHandler, userLoginHandler } from "@v1Controllers/index"
import { graphqlNonAuthHandler, graphqlAdminHandler, graphqlUserHandler } from "@v1Graphql/index"

// /adminLogin
const adminLogin = async (req: ExpressRequest, res: Response): Promise<any> => {
  return adminLoginHandler(req, res)
}

// /userLogin
const userLogin = async (req: ExpressRequest, res: Response): Promise<any> => {
  return userLoginHandler(req, res)
}

// /graphqlNonAuth
const graphqlNonAuth = async (req: ExpressRequest, res: Response): Promise<any> => {
  return graphqlNonAuthHandler(req, res, null)
}

// /graphqlAdmin
const graphqlAdmin = async (req: ExpressRequest, res: Response): Promise<any> => {
  return graphqlAdminHandler(req, res, null)
}

// /graphqlUser
const graphqlUser = async (req: ExpressRequest, res: Response): Promise<any> => {
  return graphqlUserHandler(req, res, null)
}

export { adminLogin, userLogin, graphqlNonAuth, graphqlAdmin, graphqlUser }
