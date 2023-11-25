import { describe, it, expect} from 'vitest'
import { CreateUserUseCase } from './CreateUserUseCase';
import { UserRepository } from '../../infrastructure/persistence/UserRepository';

describe('CreateUserUseCase', () => {
  it('should create a new user', async () => {
    // Arrange
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    // Act
    const newUser = await createUserUseCase.execute('John Doe', 'john@example.com');

    // Assert
    expect(newUser).toHaveProperty('id');
    expect(newUser.name).toBe('John Doe');
    expect(newUser.email).toBe('john@example.com');
  });

  it('should throw an error if data is invalid', async () => {
    // Arrange
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    // Act & Assert
    await expect(createUserUseCase.execute('', 'invalid-email')).rejects.toThrow();
  });
});
