import { v4 as uuidv4 } from "uuid";

export class User {
  userId: string;
  userRole: string; // O usa `UserRole` si tienes un enum definido
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userRole: string = "Regular user",
    userId?: string
  ) {
    this.userId = userId || uuidv4(); // Se genera si no se pasa
    this.userRole = userRole;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
