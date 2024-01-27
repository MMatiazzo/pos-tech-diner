import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CadastrarProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  categoria: 'Lanche' | 'Sobremesa' | 'Acompanhamento' | 'Bebida';

  @IsNumber()
  @IsNotEmpty()
  preco: number;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @IsNotEmpty()
  imagens: string[];
}
