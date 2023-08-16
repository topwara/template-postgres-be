// Import
import { User } from "./types/User"
import prisma from "../prisma/client"

//
export const getAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany()
}

//
export const createUser = async (_args: any): Promise<User> => {
  return await prisma.user.create({ data: _args })
}
