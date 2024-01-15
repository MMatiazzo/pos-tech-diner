import { BadRequestException, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IPedidosRepositoryPort } from "src/core/domain/pedidos/port/persistence/Ipedido-repository.port";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { IProdutoRepositoryPort } from "src/core/domain/produtos/port/persistence/Iproduto-repository.port";
import { IDeletarProdutoPort } from "src/core/domain/produtos/port/usecase/Ideletar-produto.port";
import { IDeletarProdutoUseCase } from "src/core/domain/produtos/usecase/Ideletar-produto.usecase";
import { IProdutoRepository } from "src/produtos/domain/outboundPorts/Iproduto.repository";

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

    const pedidoIds = pedidosEmAberto.map(p => p.id);

    const produtosNosPedidosEmAberto = await this.pedidoRepository.getProdutosPorPedidos(pedidoIds);

    console.log(produtosNosPedidosEmAberto)

    const isProdutoUtilizado = produtosNosPedidosEmAberto.find(p => p.produtoId === payload.id);

    console.log(isProdutoUtilizado);

    if (isProdutoUtilizado) {
      throw new BadRequestException('Esse produto está vinculado a um pedido não finalizado');
    }

    // fazer regra para deleter [pedidos itens] e [pedidos] para pedidos já finalizados

    const produtoDeletado = await this.produtoRepository.remover(payload.id);
    if (!produtoDeletado) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return produtoDeletado;
  }
}