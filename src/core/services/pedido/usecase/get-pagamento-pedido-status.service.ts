import { Inject, Injectable } from "@nestjs/common";
import { CardinalDirections } from "src/core/domain/pedidos/entity/pedido.entity";
import { IPedidosRepositoryPort } from "src/core/domain/pedidos/port/persistence/Ipedido-repository.port";
import { IGetPedidoPagamentoStatusPort } from "src/core/domain/pedidos/port/usecase/Iget-pedido-pagamento-status.port";
import { IGetPedidoPagamentoStatusUseCase } from "src/core/domain/pedidos/usecase/Iget-pagamento-pedido-status.usecase";

@Injectable()
export class GetPagamentoPedidoStatusService implements IGetPedidoPagamentoStatusUseCase {
  constructor(
    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort
  ) { }

  async execute(payload: IGetPedidoPagamentoStatusPort): Promise<boolean> {
    const { status } = await this.pedidoRepository.getProdutoPorId(payload.pedidoId);

    if (status === CardinalDirections.AGUARDANDO_PAGAMENTO || status === CardinalDirections.PAGAMENTO_RECUSADO) {
      return false;
    }

    return true;
  }
}