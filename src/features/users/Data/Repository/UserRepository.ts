// src/Data/Repository/UserRepository.ts

import type { UserCredentialsDTO } from "../Models/serCredentialsDTO";
import { User } from "../Models/User";
import { UserDTO } from "../Models/UserTo";

export class UserRepository { 
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
    if (!this.baseUrl) throw new Error("VITE_API_URL no está configurada.");
  }

  // Crear usuario (registro)
  async create(user: User): Promise<UserDTO> {
    console.log("[UserRepository.create] Enviando petición para crear usuario:", user.email);
    const response = await fetch(`${this.baseUrl}/auth/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.userId,
        userRole: user.userRole,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
    });
    console.log("[UserRepository.create] Respuesta recibida, status:", response.status);

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

  // Login con credenciales (mejor usar POST y enviar body)
  async login(credentials: UserCredentialsDTO): Promise<{ user: UserDTO; token: string }> {
    console.log("[UserRepository.login] Intentando login con email:", credentials.email);
    const response = await fetch(`${this.baseUrl}/auth/sign-in`, {
      method: "POST", // CAMBIO A POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });
    console.log("[UserRepository.login] Respuesta recibida, status:", response.status);

    const data = await this.handleResponse(response);
    console.log("[UserRepository.login] Datos procesados:", data);

    const user = new UserDTO(
      data.user.userId,
      data.user.userRole,
      data.user.firstName,
      data.user.lastName,
      data.user.email,
      data.user.password
    );

    const token = data.token;
    if (!token) {
      console.error("[UserRepository.login] No se recibió token en respuesta.");
      throw new Error("Token no recibido del servidor.");
    }

    console.log("[UserRepository.login] Login exitoso, token recibido.");
    return { user, token };
  }

  // Manejo genérico de errores/respuestas
  private async handleResponse(response: Response) {
    const data = await response.json();
    console.log("[UserRepository.handleResponse] Datos raw recibidos:", data);

    if (!response.ok) {
      console.error("[UserRepository.handleResponse] Error en respuesta:", data.message || "Error en la solicitud.");
      throw new Error(data.message || "Error en la solicitud.");
    }

    return data;
  }
}



// export class UserRepository {
//   private readonly baseUrl: string;

//   constructor() {
//     this.baseUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
//     if (!this.baseUrl) throw new Error("VITE_API_URL no está configurada.");
//   }

//   // Crear usuario (registro)
//   async create(user: User): Promise<UserDTO> {
//     const response = await fetch(`${this.baseUrl}/auth/sign-up`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         userId: user.userId,
//         userRole: user.userRole,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         password: user.password
//       })
//     });

//     const data = await this.handleResponse(response);
//     return new UserDTO(
//       data.userId,
//       data.userRole,
//       data.firstName,
//       data.lastName,
//       data.email,
//       data.password
//     );
//   }

//   // Login con credenciales
//   async login(credentials: UserCredentialsDTO): Promise<{ user: UserDTO; token: string }> {
//     const response = await fetch(
//       `${this.baseUrl}/auth/sign-in?email=${encodeURIComponent(credentials.email)}&password=${encodeURIComponent(credentials.password)}`,
//       {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//       }
//     );

//     const data = await this.handleResponse(response);

//     const user = new UserDTO(
//       data.user.userId,
//       data.user.userRole,
//       data.user.firstName,
//       data.user.lastName,
//       data.user.email,
//       data.user.password
//     );

//     const token = data.token;
//     if (!token) throw new Error("Token no recibido del servidor.");

//     return { user, token };
//   }

//   // Manejo genérico de errores/respuestas
//   private async handleResponse(response: Response) {
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Error en la solicitud.");
//     }

//     return data;
//   }
// }
