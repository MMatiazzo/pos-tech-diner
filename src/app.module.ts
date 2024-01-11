import { Module } from '@nestjs/common';
import { ClienteModule } from './application/di/cliente.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [PedidosModule, ProdutosModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
