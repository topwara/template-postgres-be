// Lib
import * as jwt from "jsonwebtoken"

// Include in project
import { ACCESS_TOKEN_SECRET } from "@config/index"
import { E_User_Role_Global, I_AccessToken } from "@utils/interface"

// #####################################################################

// [Auth Admin]
const authAdminMiddlewareFunction = async (event: any): Promise<any> => {
  console.log("===== START : Auth Middleware of Admin           =====")

  try {
    // [STEP 1] : Get Important items from event
    const token = event.req.headers.authorization

    // [STEP 2] : Seperate Token between (Bearer___*seperate here*___eyASDASFSFASDdasdas)
    const accessToken = token.substr("Bearer ".length).trim()

    // [STEP 3] : User jwt.verify to Read What inside AccessToken
    const tokenPayload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET) as I_AccessToken

    // [STEP 4] : Re-Check items inside
    if (tokenPayload.typeTokenAuth !== "access") throw new Error("Sorry, typeTokenAuth is not (access)")
    if (tokenPayload.userRoleGlobal !== E_User_Role_Global.Admin) throw new Error("Sorry, user is not (Admin)")

    // [STEP 5] : This log will appear when everything Success in Cloud-watch
    console.log("|       - AccessToken verified")

    // [STEP 6] : Pack items in Token
    const responseToken = {
      context: {
        userID: tokenPayload.userID,
        email: tokenPayload.email,
        isActive: tokenPayload.isActive,
        userRoleGlobal: tokenPayload.userRoleGlobal,
      },
    }

    console.log("=====  END  : Auth Middleware of Admin : Success =====")
    return responseToken
  } catch (error) {
    console.log("=====  END  : Auth Middleware of Admin : Error   =====", error)
    throw new Error(error)
  }
}

// [Auth User]
const authUserMiddlewareFunction = async (event: any): Promise<any> => {
  console.log("===== START : Auth Middleware of User           =====")

  try {
    // [STEP 1] : Get Important items from event
    const token = event.req.headers.authorization

    // [STEP 2] : Seperate Token between (Bearer___*seperate here*___eyASDASFSFASDdasdas)
    const accessToken = token.substr("Bearer ".length).trim()

    // [STEP 3] : User jwt.verify to Read What inside AccessToken
    const tokenPayload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET) as I_AccessToken

    // [STEP 4] : Re-Check items inside
    if (tokenPayload.typeTokenAuth !== "access") throw new Error("Sorry, typeTokenAuth is not (access)")
    if (tokenPayload.userRoleGlobal !== E_User_Role_Global.User) throw new Error("Sorry, user is not (User)")

    // [STEP 5] : This log will appear when everything Success in Cloud-watch
    console.log("|       - AccessToken verified")

    // [STEP 6] : Pack items in Token
    const responseToken = {
      context: {
        userID: tokenPayload.userID,
        email: tokenPayload.email,
        isActive: tokenPayload.isActive,
        userRoleGlobal: tokenPayload.userRoleGlobal,
      },
    }

    console.log("=====  END  : Auth Middleware of User : Success =====")
    return responseToken
  } catch (error) {
    console.log("=====  END  : Auth Middleware of User : Error   =====", error)
    throw new Error(error)
  }
}

export { authAdminMiddlewareFunction, authUserMiddlewareFunction }
