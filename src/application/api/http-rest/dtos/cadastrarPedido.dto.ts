import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CadastrarPedidoDto {
  @IsArray()
  @ArrayNotEmpty()
  produtosIds: string[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  cpf?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  email?: string;
}
