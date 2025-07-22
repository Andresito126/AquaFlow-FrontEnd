import { makeAutoObservable, runInAction } from "mobx";
import type { UserDTO } from "../../data/models/UserTo";
import { UserCredentialsDTO } from "../../data/models/serCredentialsDTO";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class UserLoginViewModel {
  email: string = "";
  password: string = "";
  error: string | null = null;
  isSubmitting: boolean = false;
  user: UserDTO | null = null;

  private loginUserUseCase: LoginUserUseCase;

  constructor() {
    makeAutoObservable(this);
    this.loginUserUseCase = new LoginUserUseCase();
  }

  onChangeEmail = (value: string) => (this.email = value);
  onChangePassword = (value: string) => (this.password = value);

async doLogin() {
  this.error = null;
  this.isSubmitting = true;

  try {
    if (!this.email || !this.password) {
      throw new Error("Por favor, ingresa tu correo y contraseña.");
    }

    const credentials = new UserCredentialsDTO(this.email, this.password);
    const { user, token } = await this.loginUserUseCase.execute(credentials);

    runInAction(() => {
      this.user = user;

      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.userRole);
      localStorage.setItem("userId", user.userId);  // <--- Aquí guardas el id
      localStorage.setItem("userEmail", user.email);

    });

    return true;
  } catch (err) {
    runInAction(() => (this.error = (err as Error).message));
    return false;
  } finally {
    runInAction(() => (this.isSubmitting = false));
  }
}
  
}
