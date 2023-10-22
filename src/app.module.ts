import { Module } from '@nestjs/common';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [PedidosModule, ClientesModule, ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
