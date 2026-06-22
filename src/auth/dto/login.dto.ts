// Implementando a classe LoginDto com as propriedades necessárias para o login
import { IsEmail, isNotEmpty } from 'class-validator';

export class LoginDto {
    // Propriedade para armazenar o email do usuário
    @isNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    // Propriedade para armazenar a senha do usuário
    password: string;

}