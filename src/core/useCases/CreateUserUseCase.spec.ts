import { describe, it, expect} from 'vitest'
import { CreateUserUseCase } from './CreateUserUseCase';
import { UserRepository } from '../../infrastructure/persistence/UserRepository';

describe('CreateUserUseCase', () => {
  it('should create a new user', async () => {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);


    const newUser = await createUserUseCase.execute('John Doe', 'john@example.com');

    expect(newUser).toHaveProperty('id');
    expect(newUser.name).toBe('John Doe');
    expect(newUser.email).toBe('john@example.com');
  });

  it('should throw an error if data is invalid', async () => {
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    await expect(createUserUseCase.execute('', 'invalid-email')).rejects.toThrow();
  });
});
