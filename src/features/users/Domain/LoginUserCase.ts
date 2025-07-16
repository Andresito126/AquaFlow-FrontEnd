import type { UserCredentialsDTO } from "../Data/Models/serCredentialsDTO";
import { UserDTO } from "../Data/Models/UserTo";

export class UserRepository {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
  }

  async login(credentials: UserCredentialsDTO): Promise<UserDTO> {
    const response = await fetch(
      `${this.baseUrl}/auth/sign-in?email=${encodeURIComponent(credentials.email)}&password=${encodeURIComponent(credentials.password)}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Credenciales inválidas");
    }

    return new UserDTO(
      data.userId,
      data.userRole,
      data.firstName,
      data.lastName,
      data.email,
      data.password
    );
  }
}
