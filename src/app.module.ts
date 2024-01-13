import { Module } from '@nestjs/common';
import { ClienteModule } from './application/di/cliente.module';
import { ProdutoModule } from './application/di/produto.module';

@Module({
  imports: [ProdutoModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
