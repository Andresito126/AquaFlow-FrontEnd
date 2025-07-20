import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

/**
 * Cliente centralizado para todas las peticiones a la API
 * Configura Axios con parámetros comunes y permite su reutilización
 */
class APIClient {
  private instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      withCredentials: import.meta.env.VITE_API_COOKIES === "false",
      ...config,
    });

    // Configuramos interceptores para manejar respuestas y errores de forma global
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Interceptor para peticiones
    this.instance.interceptors.request.use(
      (config) => {
        // Aquí podemos agregar tokens de autenticación u otras cabeceras
        // Ejemplo: config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Interceptor para respuestas
    this.instance.interceptors.response.use(
      (response) => {
        // Podemos procesar respuestas exitosas de manera global
        return response;
      },
      (error) => {
        // Manejo centralizado de errores
        // Por ejemplo, redireccionar a login si hay un error 401
        if (error.response && error.response.status === 401) {
          // Redirigir al login o mostrar mensaje
          console.error("Sesión expirada o usuario no autenticado");
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Método GET para obtener recursos
   */
  public async get<T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, { params, ...config });
  }

  /**
   * Método POST para crear recursos
   */
  public async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  /**
   * Método PUT para actualizar recursos
   */
  public async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  /**
   * Método DELETE para eliminar recursos
   */
  public async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }

  /**
   * Método PATCH para actualizar parcialmente recursos
   */
  public async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config);
  }
}

// Exportamos una instancia única para toda la aplicación
const ApiClient = new APIClient();
export default ApiClient;
