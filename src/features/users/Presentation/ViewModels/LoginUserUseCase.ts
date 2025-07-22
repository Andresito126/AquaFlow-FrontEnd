import type { UserCredentialsDTO } from "../../data/models/serCredentialsDTO";
import { UserDTO } from "../../data/models/UserTo";
import { UserRepository } from "../../Data/Repository/UserRepository";
import { jwtDecode } from "jwt-decode"; // Usar import nombrado según la exportación de la librería

interface JwtPayload {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string; // usualmente el password no está en el token, opcional
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
    "*****" // password no va aquí
  );

  return { user, token };
}
}
