import { User } from "../Data/Models/User";
import { UserDTO } from "../Data/Models/UserTo";

import { UserRepository } from "../Data/Repository/UserRepository";

export class CreateUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(user: User): Promise<UserDTO | null> {
    try {
      const response = await this.userRepository.create(user);
      return response
        ? new UserDTO(
            response.userId,
            response.userRole,
            response.firstName,
            response.lastName,
            response.email,
            response.password
          )
        : null;
    } catch (error) {
      throw new Error("Error al crear usuario: " + (error as Error).message);
    }
  }
}
