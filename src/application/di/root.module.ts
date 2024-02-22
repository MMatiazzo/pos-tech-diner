import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente.module';
import { ProdutoModule } from './produto.module';
import { PedidoModule } from './pedido.module';
import { HealthcheckModule } from './healtcheck.module';

@Module({
  imports: [ProdutoModule, ClienteModule, PedidoModule, HealthcheckModule],
  controllers: [],
  providers: [],
})
export class RootModule { }
