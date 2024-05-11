import { User } from "../entities/user.entity";

export class CreateUserDto extends User{
    id: number;
    name: string;
    email: string;
    password: string;
}

