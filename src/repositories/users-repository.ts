import {
  TCreateUser,
  TResCreateUser,
  TUser,
} from '@/interfaces/user.interfaces'

export interface UserRepository {
  create(data: TCreateUser): Promise<TResCreateUser>

  findByEmail(email: string): Promise<TResCreateUser | null>

  findByEmailForAuth(email: string): Promise<TUser | null>
}
