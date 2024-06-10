import { IsString, IsNotEmpty, IsEmail, IsEnum } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: "string";

    @IsEmail()
    email: "string";

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], { message: "Invalid role required" })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}