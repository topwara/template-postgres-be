// Lib
import { PrismaClient } from "@prisma/client"

// Include in project

// =============================== ENUM

export enum E_TypePlatform {
  User = "USER",
  Admin = "ADMIN",
}

// ========================== INTERFACE

export interface I_PrismaContext {
  prisma: PrismaClient
}
