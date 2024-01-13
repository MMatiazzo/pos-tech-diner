// import { Module } from '@nestjs/common';
// import { PedidosController } from './adapters/driving/pedidos.controller';
// import { IPedidosRepository } from './domain/outboundPorts/Ipedido.repository';
// import { PeditosPostgres } from './adapters/driven/pedido-posgres.repository';
// import { PedidosService } from './domain/inboundPorts/pedidos.service';
// import { PrismaService } from 'src/prisma/prisma.service';

// @Module({
//   controllers: [PedidosController],
//   providers: [
//     PrismaService,
//     PedidosService,
//     {
//       provide: IPedidosRepository,
//       useClass: PeditosPostgres,
//     },
//   ],
// })
// export class PedidosModule {}
