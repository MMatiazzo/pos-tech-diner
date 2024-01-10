import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ClienteModule } from './application/di/cliente.module';

@Module({
  imports: [PedidosModule, ClientesModule, ProdutosModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
