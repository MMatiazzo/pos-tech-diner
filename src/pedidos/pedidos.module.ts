import { Module } from '@nestjs/common';
import { PedidosController } from './adapters/driving/PedidosController';
import { PedidosService } from './domain/inboundPorts/PedidosService';
import { IPedidosRepository } from './domain/outboundPorts/IPedidosRepository';
import { PedidosInMemory } from './adapters/driven/PedidosInMemory';

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
