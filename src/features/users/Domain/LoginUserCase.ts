import { jwtDecode } from "jwt-decode";
import type { UserCredentialsDTO } from "../data/models/serCredentialsDTO";
import { UserDTO } from "../data/models/UserTo";
import { UserRepository } from "../Data/Repository/UserRepository";
interface JwtPayload {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
}

export class LoginUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(credentials: UserCredentialsDTO): Promise<{ user: UserDTO; token: string }> {
    const { token } = await this.userRepository.login(credentials); // login devuelve { token }

    const decoded = jwtDecode<JwtPayload>(token);

    const user = new UserDTO(
      decoded.id,
      decoded.role,
      decoded.firstName,
      decoded.lastName,
      decoded.email,
      "*****" // no guardes contraseña
    );

    return { user, token };
  }
}