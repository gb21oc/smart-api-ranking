import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUppercase, MaxLength, MinLength } from "class-validator"

export class CreatePlayerDTO{
    @IsNotEmpty()
    @IsString()
    @MaxLength(14)
    @IsPhoneNumber("BR")
    cellPhone: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    @IsUppercase()
    @MaxLength(1)
    @MinLength(1)
    category: string
}