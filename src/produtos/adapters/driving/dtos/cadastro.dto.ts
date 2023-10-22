import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export type TipoCategoria = 'Lanche' | 'Acompanhanmento' | 'Bebida' | 'Sobremesa';

export const EnumCategoriaTipo: TipoCategoria[] = [
  'Lanche',
  'Acompanhanmento',
  'Bebida',
  'Sobremesa',
]

export class CadastroDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEnum(EnumCategoriaTipo,{
    message: `categoria must be one of: ${EnumCategoriaTipo.join(', ')}`,
  })
  categoria: string;

  @IsNumber()
  @Min(0.01)
  preco: number;

  @IsNotEmpty()
  descricao: string;

  @IsArray()
  @ArrayMinSize(0)
  @IsString({ each: true })
  imagens: string[];
}