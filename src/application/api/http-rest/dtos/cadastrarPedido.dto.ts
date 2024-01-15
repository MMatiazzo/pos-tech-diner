import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CadastrarPedidoDto {
  @IsArray()
  @ArrayNotEmpty()
  produtosIds: string[];

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  clienteCpf: string;
}
