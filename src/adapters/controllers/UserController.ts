import { type Request, type Response } from 'express'
import { type CreateUserUseCase } from '../../core/useCases/CreateUserUseCase'

export class UserController {
  constructor (private readonly createUserUseCase: CreateUserUseCase) {}

  createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email } = req.body

    try {
      const newUser = await this.createUserUseCase.execute(name, email)
      res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' })
    }
  }
}
