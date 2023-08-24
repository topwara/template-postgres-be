// Lib
import * as _ from "lodash"
import * as bcrypt from "bcryptjs"

// Include in project
import { EResponseStatus, responseFormatHttp } from "@utils/http"
import { generateAccessToken, generateRefreshToken } from "@v1/utils/userAuthentication"
import { E_Is_Active, E_User_Role_Global, I_User } from "@utils/interface"
import prisma from "@prismaCall/client"

// ================================================================

// [POST] /auth/user/login
const userLoginHandler = async (req: any): Promise<any> => {
  console.log("===== START : userLoginHandler            =====")

  try {
    if (_.isEmpty(req.body)) return responseFormatHttp(EResponseStatus.WARNING, { error: "body is require" })

    const { email, password } = req.body

    if (!email) return responseFormatHttp(EResponseStatus.WARNING, { error: "email is require" })

    if (!password) return responseFormatHttp(EResponseStatus.WARNING, { error: "password is require" })

    const userRes = (await prisma["user"].findFirst({ where: { email: email } })) as I_User

    if (!userRes) return responseFormatHttp(EResponseStatus.WARNING, { error: "user not exist" })

    if (userRes.isActive !== E_Is_Active.True)
      return responseFormatHttp(EResponseStatus.WARNING, { error: "user not active" })

    if (userRes.userRoleGlobal !== E_User_Role_Global.User)
      return responseFormatHttp(EResponseStatus.WARNING, { error: "user not role_global user" })

    const comparePassword = await bcrypt.compare(password, userRes.passwordHash)

    if (!comparePassword) return responseFormatHttp(EResponseStatus.WARNING, { error: "password not correct" })

    const customAtt: Partial<I_User> = {
      userID: userRes.userID,
      isActive: userRes.isActive,
      email: userRes.email,
      userRoleGlobal: userRes.userRoleGlobal,
    }

    const accessToken = generateAccessToken(userRes.userID, customAtt)
    const refreshToken = generateRefreshToken(userRes.userID, userRes.passwordHash, customAtt)

    console.log("=====  END  : userLoginHandler : Success  =====")
    return responseFormatHttp(EResponseStatus.SUCCESS, { accessToken, refreshToken })
  } catch (error) {
    console.log("=====  END  : userLoginHandler : Error    =====", error)
    return responseFormatHttp(EResponseStatus.ERROR, { error: error })
  }
}

export default userLoginHandler
