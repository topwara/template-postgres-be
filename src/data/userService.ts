// Import
import { User } from "./types/User"
import prisma from "@prismaCall/client"

//
export const getAllUsers = async (): Promise<any[]> => {
  return await prisma.user.findMany()
}

//
export const createUser = async (_args: any): Promise<any> => {
  return await prisma.user.create({ data: _args })
}
