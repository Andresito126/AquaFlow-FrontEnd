export class UserModel {
    user_id: string;
    first_name: string;
    first_surname: string;
    middle_surname: string;
    email: string;
    password_hashed: string;
    role: string;

    constructor(
        user_id: string,
        first_name: string,
        first_surname: string,
        middle_surname: string,
        email: string,
        password_hashed: string,
        role: string,
    ){
        this.user_id = user_id;
        this.first_name = first_name;
        this.first_surname= first_surname;
        this.middle_surname = middle_surname;
        this.email = email;
        this.password_hashed = password_hashed;
        this.role = role;
    }
}

