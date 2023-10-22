import { Module } from '@nestjs/common';
import { PedidosController } from './adapters/driving/PedidosController';
import { IPedidosRepository } from './domain/outboundPorts/IPedidosRepository';
import { PedidosInMemory } from './adapters/driven/PedidosInMemory';
import { PedidosService } from './domain/inboundPorts/pedidos.service';

@Module({
  controllers: [PedidosController],
  providers: [
    PedidosService,
    {
      provide: IPedidosRepository,
      useClass: PedidosInMemory,
    },
  ],
})
export class PedidosModule {}
