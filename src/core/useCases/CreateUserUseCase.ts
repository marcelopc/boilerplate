import { type User } from '../entities/User'
import { type UserRepository } from '../../infrastructure/persistence/UserRepository'

export class CreateUserUseCase {
  constructor (private readonly userRepository: UserRepository) {}

  async execute (name: string, email: string): Promise<User> {
    if(!name){
      throw new Error('Name is required')
    }
    if(!email){
      throw new Error('Email is required')
    }
    const newUser = await this.userRepository.create({ name, email })
    return newUser
  }
}
