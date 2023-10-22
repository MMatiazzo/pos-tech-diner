import { IsEmail, IsNotEmpty } from 'class-validator';

export class CadastroDto {
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}