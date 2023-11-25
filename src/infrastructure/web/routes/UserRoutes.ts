import express from 'express'
import { UserController } from '../../../adapters/controllers/UserController'
import { CreateUserUseCase } from '../../../core/useCases/CreateUserUseCase'
import { UserRepository } from '../../../infrastructure/persistence/UserRepository'

export function configureRoutes (): express.Router {
  const router = express.Router()
  const userRepository = new UserRepository()
  const createUserUseCase = new CreateUserUseCase(userRepository)
  const userController = new UserController(createUserUseCase)

  router.post('/users', userController.createUser)

  return router
}
