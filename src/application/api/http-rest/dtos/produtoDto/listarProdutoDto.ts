import { IsNotEmpty, IsString } from 'class-validator';

export class ListarProdutoDto {
  @IsString()
  @IsNotEmpty()
  categoria: string;
}
