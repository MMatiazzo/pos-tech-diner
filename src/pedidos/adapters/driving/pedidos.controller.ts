import { Body, Controller, Get, Post } from '@nestjs/common';
import { PedidosService } from 'src/pedidos/domain/inboundPorts/pedidos.service';
import { CriarPedidoDto } from './dtos/criar-pedido.dto';
import { Pedido } from 'src/pedidos/domain/entities/pedido.entity';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Post()
  async cadastrar(@Body() { produtosIds, status, clienteCpf }: CriarPedidoDto): Promise<any> {
    const pedido = await this.pedidosService.criar(produtosIds, status, clienteCpf);
    return pedido
  }

  @Get()
  async listar(): Promise<Pedido[]> {
    const pedidos = await this.pedidosService.listar();
    return pedidos;
  }
}
