import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  password: string;
}
