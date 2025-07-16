export class UserDTO {
  constructor(
    public readonly userId: string,
    public readonly userRole: string, // usa UserRole si tienes enum
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly password: string
  ) {}
}
