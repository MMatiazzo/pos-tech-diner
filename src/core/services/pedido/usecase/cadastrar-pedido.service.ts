import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from "src/core/domain/cliente/ports/persistence/Icliente-repository.port";
import { CardinalDirections, Pedido } from "src/core/domain/pedidos/entity/pedido.entity";
import { IPedidosRepositoryPort } from "src/core/domain/pedidos/port/persistence/Ipedido-repository.port";
import { ICadastraPedidoPort } from "src/core/domain/pedidos/port/usecase/Icadastra-pedido.port";
import { ICadastrarPedidoUseCase } from "src/core/domain/pedidos/usecase/Icadastra-pedido.usecase";
import { IProdutoRepositoryPort } from "src/core/domain/produtos/port/persistence/Iproduto-repository.port";

@Injectable()
export class CadastrarPedidoService implements ICadastrarPedidoUseCase {
  constructor(
    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort,

    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort,

    @Inject(IProdutoRepositoryPort)
    private produtoRepository: IProdutoRepositoryPort
  ) { }

  async execute({ produtosIds, session }: ICadastraPedidoPort): Promise<any> {
    const clienteSession = session?.auth?.cliente;

    const cliente = !clienteSession ? null : await this.clienteRepository.getCliente(clienteSession.cpf);

    if (cliente === undefined && clienteSession) {
      throw new BadRequestException('Cliente não cadastrado no sistema');
    }

    const produtos = await this.produtoRepository.buscarPorIds(produtosIds);

    if (produtos.length !== produtosIds.length) {
      throw new BadRequestException('Algum produto não foi encontrado');
    }

    const pedidoEntity = Pedido.new({
      cpf: cliente?.cpf || null,
      email: cliente?.email || null,
      status: CardinalDirections.AGUARDANDO_PAGAMENTO,
      produtosIds
    });

    const pedido = await this.pedidoRepository.criar(produtosIds, pedidoEntity);

    return pedido;
  }
}