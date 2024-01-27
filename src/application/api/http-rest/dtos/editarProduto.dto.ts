import { IsNotEmpty, IsString } from 'class-validator';

export class EditarPedidoDto {
  @IsString()
  @IsNotEmpty()
  campo: "nome" | "preco" | "descricao" | "categoria";

  @IsNotEmpty()
  valor: string;
}
