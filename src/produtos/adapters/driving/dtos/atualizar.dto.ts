import { IsEnum, IsNotEmpty } from 'class-validator';

export type TipoCampo = 'nome' | 'categoria' | 'preco' | 'descricao' | 'imagens';

export const EnumTipoCampo: TipoCampo[] = [
  'nome' ,
  'categoria',
  'preco',
  'descricao',
  'imagens',
]

export class AtualizarDto {
  @IsNotEmpty()
  @IsEnum(EnumTipoCampo,{
    message: `campo must be one of: ${EnumTipoCampo.join(', ')}`,
  })
  campo: string;

  @IsNotEmpty()
  valor: string | string[];
}