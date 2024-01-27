import { IsNotEmpty, IsString } from 'class-validator';

export class PagarPedidoDto {
  @IsString()
  @IsNotEmpty()
  pedidoId: string;

  @IsString()
  @IsNotEmpty()
  cartao: string;
}
