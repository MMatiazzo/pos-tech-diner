import { Inject, Injectable } from "@nestjs/common";
import { Pedido } from "src/core/domain/pedidos/entity/pedido.entity";
import { IPedidosRepositoryPort } from "src/core/domain/pedidos/port/persistence/Ipedido-repository.port";
import { IListaPedidoUseCase } from "src/core/domain/pedidos/usecase/Ilista-pedido.usecase";

@Injectable()
export class ListaPedidoService implements IListaPedidoUseCase {
  constructor(
    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort,
  ) { }

  async execute(): Promise<Pedido[]> {
    const pedidos = await this.pedidoRepository.listar();
    return pedidos;
  }
}