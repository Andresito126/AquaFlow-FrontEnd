export class UserDTO {
  public readonly userId: string;
  public readonly userRole: string;
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly email: string;
  public readonly password: string;

  constructor(
    userId: string,
    userRole: string, 
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.userId = userId;
    this.userRole = userRole;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}