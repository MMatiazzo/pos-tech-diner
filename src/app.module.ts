import { Module } from '@nestjs/common';
import { ClienteModule } from './application/di/cliente.module';
import { ProdutoModule } from './application/di/produto.module';
import { PedidoModule } from './application/di/pedido.module';

@Module({
  imports: [ProdutoModule, ClienteModule, PedidoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
