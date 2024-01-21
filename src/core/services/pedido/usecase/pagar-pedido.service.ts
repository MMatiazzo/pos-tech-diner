import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CardinalDirections } from 'src/core/domain/pedidos/entity/pedido.entity';
import { IPedidosRepositoryPort } from 'src/core/domain/pedidos/port/persistence/Ipedido-repository.port';
import { IPagarPedidoPort } from 'src/core/domain/pedidos/port/usecase/Ipagar-pedido.port';
import { IPagarPedidoUseCase } from 'src/core/domain/pedidos/usecase/Ipagar-pedido.usecase';
import { PagamentoMock } from 'src/infrastructure/framework/payment-gateway/payment-mock/pagamento-mock';

@Injectable()
export class PagarPedidoService implements IPagarPedidoUseCase {
  constructor(
    @Inject(IPedidosRepositoryPort)
    private pedidoRepository: IPedidosRepositoryPort,

    @Inject(PagamentoMock)
    private pagamentoMock: PagamentoMock,
  ) { }

  async execute({ pedidoId, cartao }: IPagarPedidoPort): Promise<void> {
    const pedidoExiste = await this.pedidoRepository.getPedidoPorId(pedidoId);

    if (!pedidoExiste) {
      throw new BadRequestException('Pedido não existe');
    }

    if (pedidoExiste.status !== CardinalDirections.AGUARDANDO_PAGAMENTO) {
      throw new BadRequestException('Pedido já processado');
    }

    await this.pagamentoMock.makePayment({ pedidoId, cartao });
  }
}
