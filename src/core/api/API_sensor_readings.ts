import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

class APISENSORREADINGS {
  private instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_APISENSORS_URL, 
      withCredentials: import.meta.env.VITE_API_COOKIES === "false",
      ...config,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          console.error("Sesión expirada o usuario no autenticado en API2");
        }
        return Promise.reject(error);
      }
    );
  }

  public async get<T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, { params, ...config });
  }

  public async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

}

const ApiClient2 = new APISENSORREADINGS();
export default ApiClient2;
