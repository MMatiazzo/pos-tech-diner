import { Body, Controller, Post } from '@nestjs/common';
import { PedidosService } from 'src/pedidos/domain/inboundPorts/pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  async cadastrar(@Body() { produtosIds, status, clienteCpf }): Promise<any> {
    const pedido = await this.pedidosService.criar(produtosIds, status, clienteCpf);
    return pedido
  }
}
