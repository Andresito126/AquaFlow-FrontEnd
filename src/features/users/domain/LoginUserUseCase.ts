import type { UserCredentialsDTO } from "../data/models/UserCredentialsDTO";
import { UserDTO } from "../data/models/UserTo";
import { UserRepository } from "../data/repository/UserRepository";
import { jwtDecode } from "jwt-decode"; 

interface JwtPayload {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export class LoginUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

async execute(credentials: UserCredentialsDTO): Promise<{ user: UserDTO; token: string }> {
  const { token } = await this.userRepository.login(credentials);

  const decoded = jwtDecode<JwtPayload>(token);

  const user = new UserDTO(
    decoded.id,
    decoded.role,
    decoded.firstName,
    decoded.lastName,
    decoded.email,
    "*****" 
  );

  return { user, token };
}
}