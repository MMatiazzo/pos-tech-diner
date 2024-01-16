import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente.module';
import { ProdutoModule } from './produto.module';
import { PedidoModule } from './pedido.module';

@Module({
  imports: [ProdutoModule, ClienteModule, PedidoModule],
  controllers: [],
  providers: [],
})
export class RootModule { }
