import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { IPedidosRepositoryPort } from '../../../domain/pedidos/port/persistence/Ipedido-repository.port';
import { IProdutoRepositoryPort } from '../../../domain/produtos/port/persistence/Iproduto-repository.port';
import { IDeletarProdutoPort } from '../../../domain/produtos/port/usecase/Ideletar-produto.port';
import { IDeletarProdutoUseCase } from '../../../domain/produtos/usecase/Ideletar-produto.usecase';

@Injectable()
export class DeletarProdutoService implements IDeletarProdutoUseCase {
  constructor(
    @Inject(IProdutoRepositoryPort)
    private produtoRepository: IProdutoRepositoryPort,

    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort,
  ) { }

  async execute(payload: IDeletarProdutoPort): Promise<any> {
    const pedidosEmAberto = await this.pedidoRepository.getPedidosEmAndamento();

    const pedidoIds = pedidosEmAberto.map((p) => p.id);

    const produtosNosPedidosEmAberto =
      await this.pedidoRepository.getProdutosPorPedidos(pedidoIds);

    const isProdutoUtilizado = produtosNosPedidosEmAberto.find(
      (p) => p.produtoId === payload.id,
    );

    if (isProdutoUtilizado) {
      throw new BadRequestException(
        'Esse produto está vinculado a um pedido não finalizado',
      );
    }

    // fazer regra para deleter [pedidos itens] e [pedidos] para pedidos já finalizados

    const produtoDeletado = await this.produtoRepository.remover(payload.id);
    if (!produtoDeletado)
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return produtoDeletado;
  }
}
