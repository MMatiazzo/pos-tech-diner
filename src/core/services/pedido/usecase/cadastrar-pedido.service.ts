import { Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from "src/core/domain/cliente/ports/persistence/Icliente-repository.port";
import { CardinalDirections, Pedido } from "src/core/domain/pedidos/entity/pedido.entity";
import { IPedidosRepositoryPort } from "src/core/domain/pedidos/port/persistence/Ipedido-repository.port";
import { ICadastraPedidoPort } from "src/core/domain/pedidos/port/usecase/Icadastra-pedido.port";
import { ICadastrarPedidoUseCase } from "src/core/domain/pedidos/usecase/Icadastra-pedido.usecase";

@Injectable()
export class CadastrarPedidoService implements ICadastrarPedidoUseCase {
  constructor(
    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort,

    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort
  ) { }

  async execute({ cpf, email, produtosIds }: ICadastraPedidoPort): Promise<any> {
    const cliente = !cpf && !email ? null : await this.clienteRepository.getCliente(cpf || email);

    const pedidoEntity = Pedido.new({
      cpf: cliente?.cpf || null,
      email: cliente?.email || null,
      status: CardinalDirections.AGUARDANDO_PAGAMENTO,
      produtosIds
    });

    const produto = await this.pedidoRepository.criar(produtosIds, pedidoEntity);

    return produto;
  }
}