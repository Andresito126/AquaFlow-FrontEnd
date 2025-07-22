// src/Data/Repository/UserRepository.ts

import type { UserCredentialsDTO } from "../models/serCredentialsDTO";
import { User } from "../models/User1";
import { UserDTO } from "../models/UserTo";


export class UserRepository {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
    if (!this.baseUrl) throw new Error("VITE_API_URL no está configurada.");
  }

  // Crear usuario (registro)
  async create(user: User): Promise<UserDTO> {
    console.log(
      "[UserRepository.create] Enviando petición para crear usuario:",
      user.email
    );
    const response = await fetch(`${this.baseUrl}/auth/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.userId,
        userRole: user.userRole,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      }),
    });
    console.log(
      "[UserRepository.create] Respuesta recibida, status:",
      response.status
    );

    const data = await this.handleResponse(response);

    console.log("[UserRepository.create] Datos procesados:", data);

    return new UserDTO(
      data.userId,
      data.userRole,
      data.firstName,
      data.lastName,
      data.email,
      data.password
    );
  }

async login(credentials: UserCredentialsDTO): Promise<{ token: string }> {
  const response = await fetch(`${this.baseUrl}/auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Credenciales inválidas");
  }

  const token = data.data?.attributes?.token;
  if (!token) {
    throw new Error("Token no recibido del backend.");
  }

  return { token };
}








  // Manejo genérico de errores/respuestas
  private async handleResponse(response: Response) {
    const data = await response.json();
    console.log("[UserRepository.handleResponse] Datos raw recibidos:", data);

    if (!response.ok) {
      console.error(
        "[UserRepository.handleResponse] Error en respuesta:",
        data.message || "Error en la solicitud."
      );
      throw new Error(data.message || "Error en la solicitud.");
    }

    return data;
  }
}
