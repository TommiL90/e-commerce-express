import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { AuthService } from '../auth-service'

export const makeAuthUserService = () => {
  const userRepository = new PrismaUserRepository()

  const authService = new AuthService(userRepository)

  return authService.createToken
}
