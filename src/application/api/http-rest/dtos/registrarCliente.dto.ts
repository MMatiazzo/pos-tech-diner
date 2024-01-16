import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class RegistrarClienteDto {
  @IsString()
  @IsOptional()
  cpf?: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
