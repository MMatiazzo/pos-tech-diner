import { Inject, Injectable } from "@nestjs/common";
import { IPedidosRepositoryPort } from "src/core/domain/pedidos/port/persistence/Ipedido-repository.port";
import { IAtualizarPedidoStatusPort } from "src/core/domain/pedidos/port/usecase/Iatualizar-pedido-status.port";
import { IAtualizarPedidoStatusUseCase } from "src/core/domain/pedidos/usecase/Iatuliza-pedido-status.usecase";

@Injectable()
export class AtualizarPedidoStatusService implements IAtualizarPedidoStatusUseCase {
  constructor(
    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort,
  ) { }

  async execute({ novoStatus, pedidoId }: IAtualizarPedidoStatusPort): Promise<any> {
    const pedidoAtualizado = await this.pedidoRepository.atualizarPedidoStatus(pedidoId, novoStatus)
    return pedidoAtualizado;
  }
}