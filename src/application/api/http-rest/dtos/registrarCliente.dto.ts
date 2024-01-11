import { IsString, IsNotEmpty } from 'class-validator';

export class RegistrarClienteDto {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
