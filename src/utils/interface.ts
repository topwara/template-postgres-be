// Lib
import { PrismaClient } from "@prisma/client"

// Include in project

// =============================== ENUM

export enum E_Is_Active {
  False = "FALSE",
  True = "TRUE",
}

export enum E_User_Role_Global {
  User = "USER",
  Admin = "ADMIN",
}

// ========================== INTERFACE

export interface I_Context {
  context: Partial<I_User>
}

export interface I_PrismaContext {
  prisma: PrismaClient
}

export interface I_AccessToken {
  userID: string
  email: string
  passwordHash: string
  isActive: E_Is_Active | string
  userRoleGlobal: E_User_Role_Global | string
  name: string
  createdAt: string
  updatedAt: string
  typeTokenAuth: "access" | "refresh"
}

export interface I_User {
  userID: string
  email: string
  passwordHash: string
  isActive: E_Is_Active | string
  userRoleGlobal: E_User_Role_Global | string
  name: string
  createdAt: string
  updatedAt: string
}
