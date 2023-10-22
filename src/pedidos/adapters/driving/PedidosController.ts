import { Controller, Get } from '@nestjs/common';
import { PedidosService } from 'src/pedidos/domain/inboundPorts/pedidos.service';

@Controller('pedidos')
export class PedidosController {
  constructor(private pedidosService: PedidosService) {}

  @Get()
  async list(): Promise<any> {}
}
