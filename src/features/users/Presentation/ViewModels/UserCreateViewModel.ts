import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../../data/models/User1";
import { CreateUserUseCase } from "../../domain/CreateUserUseCase";


export class UserViewModel {
  firstName: string = "";
  lastName1: string = "";
  lastName2: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  userRole: string = "Regular user";

  error: string | null = null;
  isSubmitting: boolean = false;
  isSuccess: boolean = false;

  private createUserUseCase: CreateUserUseCase;

  constructor() {
    makeAutoObservable(this);
    this.createUserUseCase = new CreateUserUseCase();
  }

  onChangeFirstName = (value: string) => (this.firstName = value);
  onChangeLastName1 = (value: string) => (this.lastName1 = value);
  onChangeLastName2 = (value: string) => (this.lastName2 = value);
  onChangeEmail = (value: string) => (this.email = value);
  onChangePassword = (value: string) => (this.password = value);
  onChangeConfirmPassword = (value: string) => (this.confirmPassword = value);
  onChangeUserRole = (value: string) => (this.userRole = value);

  async doCreateUser() {
    this.error = null;
    this.isSuccess = false;
    this.isSubmitting = true;

    try {
      if (
        !this.firstName ||
        !this.lastName1 ||
        !this.lastName2 ||
        !this.email ||
        !this.password ||
        !this.confirmPassword
      ) {
        throw new Error("Por favor, completa todos los campos.");
      }

      if (this.password !== this.confirmPassword) {
        throw new Error("Las contraseñas no coinciden.");
      }

      const fullLastName = `${this.lastName1} ${this.lastName2}`;
      const user = new User(
        this.firstName,
        fullLastName,
        this.email,
        this.password,
        this.userRole
      );

      const result = await this.createUserUseCase.execute(user);

      if (result) {
        runInAction(() => {
          this.isSuccess = true;
          this.clearForm();
        });
      }
    } catch (err) {
      runInAction(() => (this.error = (err as Error).message));
    } finally {
      runInAction(() => (this.isSubmitting = false));
    }
  }

  clearForm() {
    this.firstName = "";
    this.lastName1 = "";
    this.lastName2 = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.userRole = "Regular user";
  }
}