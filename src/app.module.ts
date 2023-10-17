import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [PedidosModule, ClientesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
