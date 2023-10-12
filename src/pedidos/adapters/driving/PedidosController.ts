import { Controller, Get } from '@nestjs/common';
import { PedidosService } from 'src/pedidos/domain/inboundPorts/PedidosService';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Get()
  async list(): Promise<any> {
    return await this.pedidosService.listar(1);
  }
}
