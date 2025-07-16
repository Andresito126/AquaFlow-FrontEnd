// src/Domain/LoginUserUseCase.ts

import type { UserCredentialsDTO } from "../../Data/Models/serCredentialsDTO";
import type { UserDTO } from "../../Data/Models/UserTo";
import { UserRepository } from "../../Data/Repository/UserRepository";

export class LoginUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Cambiar Promise<UserDTO> a Promise<{ user: UserDTO; token: string }>
  async execute(credentials: UserCredentialsDTO): Promise<{ user: UserDTO; token: string }> {
    try {
      return await this.userRepository.login(credentials);
    } catch (error) {
      throw new Error("Error al iniciar sesión: " + (error as Error).message);
    }
  }
}
