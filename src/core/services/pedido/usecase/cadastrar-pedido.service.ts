import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from "src/core/domain/cliente/ports/persistence/Icliente-repository.port";
import { Pedido } from "src/core/domain/pedidos/entity/pedido.entity";
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

  async execute(payload: ICadastraPedidoPort): Promise<Pedido> {
    const cliente = await this.clienteRepository.getCliente(payload.clienteCpf);

    if (!cliente) {
      throw new BadRequestException('Cliente not found');
    }

    const pedidoEntity = Pedido.new({ cpf: cliente.cpf, status: payload.status });
    const produto = await this.pedidoRepository.criar(payload.produtosIds, pedidoEntity);
    return produto;
  }
}