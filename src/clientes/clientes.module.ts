import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoPostresRepository } from 'src/produtos/adapters/driven/produto-postgres.repository';
import { ProdutosController } from 'src/produtos/adapters/driving/pedito.controller';
import { ProdutosService } from 'src/produtos/domain/inboundPorts/produto.service';
import { IProdutoRepository } from 'src/produtos/domain/outboundPorts/Iproduto.repository';

@Module({
  controllers: [ProdutosController],
  imports: [],
  providers: [
    PrismaService,
    ProdutosService,
    {
      provide: IProdutoRepository,
      useClass: ProdutoPostresRepository,
    },
  ],
})
export class ClientesModule {}
