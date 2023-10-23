import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export type TipoStatus = 'recebido' | 'em-preparacao' | 'pronto' | 'finalizado';

export const EnumStatusTipo: TipoStatus[] = [
  'recebido',
  'em-preparacao',
  'pronto',
  'finalizado',
]

export class CriarPedidoDto {
  @IsNotEmpty()
  produtosIds: string[];

  @IsNotEmpty()
  @IsEnum(EnumStatusTipo,{
    message: `status must be one of: ${EnumStatusTipo.join(', ')}`,
  })
  status: string;

  @IsNotEmpty()
  clienteCpf: string;
}