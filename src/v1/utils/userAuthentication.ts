// Lib
import { ACCESS_TOKEN_LIFE, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_LIFE, REFRESH_TOKEN_SECRET } from "@config/index"
import * as jwt from "jsonwebtoken"

// Include in project

// ================================================================

/**
 *
 * @param userID      [Require] userID of this account
 * @param customAttrs [Require] you can add any value of UserInfomation or else inside
 * @returns           AccessToken with UserInfomation inside and TypeToken === "access"
 */
export const generateAccessToken = (userID: string, customAttrs: any): string => {
  const userInfoItems = customAttrs

  const payload = {
    ...userInfoItems,
    userID,
    typeTokenAuth: "access",
  }

  const token = jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_LIFE })

  return token
}

/**
 *
 * @param userID      [Require] userID of this account
 * @param pwdHash     [Require] passwordHash of this account, Get by query UserTable
 * @param customAttrs [Require] you can add any value of UserInfomation or else inside
 * @returns           RefreshToken with UserInfomation inside and TypeToken === "refresh"
 */
export const generateRefreshToken = (userID: string, pwdHash: string, customAttrs: any): string => {
  const userInfoItems = customAttrs

  const tokenPayload = {
    ...userInfoItems,
    userID,
    key: pwdHash,
    typeTokenAuth: "refresh",
  }

  const token = jwt.sign(tokenPayload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_LIFE })

  return token
}
