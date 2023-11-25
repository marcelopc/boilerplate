import { type User } from '../../core/entities/User'

export class UserRepository {
  private readonly users: User[] = []

  async create (userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      ...userData
    }
    this.users.push(newUser)
    return newUser
  }
}
