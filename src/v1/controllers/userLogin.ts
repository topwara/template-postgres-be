// Lib
import * as _ from "lodash"
import * as bcrypt from "bcryptjs"
import type { Request as ExpressRequest, Response } from "express"

// Include in project
import { EResponseStatus, responseFormatHttp } from "@utils/http"
import { generateAccessToken, generateRefreshToken } from "@v1/utils/userAuthentication"
import { E_Is_Active, E_User_Role_Global } from "@utils/interface"
import prisma from "@prismaCall/client"
import { User } from "@prisma/client"

// ================================================================

// [POST] /userLogin
const userLoginHandler = async (req: ExpressRequest, res: Response): Promise<any> => {
  console.log("===== START : userLoginHandler            =====")

  try {
    if (_.isEmpty(req.body)) return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "body is require" })

    const { email, password } = req.body

    if (!email) return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "email is require" })

    if (!password) return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "password is require" })

    const userRes = (await prisma["user"].findFirst({ where: { email: email } })) as User

    if (!userRes) return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "user not exist" })

    if (userRes.isActive !== E_Is_Active.True)
      return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "user not active" })

    if (userRes.userRoleGlobal !== E_User_Role_Global.User)
      return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "user not role_global user" })

    const comparePassword = await bcrypt.compare(password, userRes.passwordHash)

    if (!comparePassword)
      return responseFormatHttp(req, res, EResponseStatus.WARNING, { error: "password not correct" })

    const customAtt: Partial<User> = {
      userID: userRes.userID,
      isActive: userRes.isActive,
      email: userRes.email,
      userRoleGlobal: userRes.userRoleGlobal,
    }

    const accessToken = generateAccessToken(userRes.userID, customAtt)
    const refreshToken = generateRefreshToken(userRes.userID, userRes.passwordHash, customAtt)

    console.log("=====  END  : userLoginHandler : Success  =====")
    return responseFormatHttp(req, res, EResponseStatus.SUCCESS, { accessToken, refreshToken })
  } catch (error) {
    console.log("=====  END  : userLoginHandler : Error    =====", error)
    return responseFormatHttp(req, res, EResponseStatus.ERROR, { error: error })
  }
}

export default userLoginHandler
