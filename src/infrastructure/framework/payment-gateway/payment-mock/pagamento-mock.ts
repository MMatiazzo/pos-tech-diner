import { IPaymentGatewayPort } from 'src/core/domain/pedidos/port/framework/payment/Ipayment-gateway.port';
import { IPaymentGateway } from '../Ipayment.gateway';
import axios from 'axios';
import { IPaymentMockGatewayPort } from 'src/core/domain/pedidos/port/framework/payment/IPayment-mock-gateway.port';
import { CardinalDirections } from 'src/core/domain/pedidos/entity/pedido.entity';

//Id pedido
//status

export class PagamentoMock implements IPaymentGateway {
  createQrCode(data: IPaymentGatewayPort): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async makePayment(data: IPaymentMockGatewayPort): Promise<void> {
    const newStatus =
      data.cartao === '5031433215406351'
        ? CardinalDirections.PAGAMENTO_CONFIRMADO
        : CardinalDirections.PAGAMENTO_RECUSADO;

    await axios.put(`${process.env.APP_URL}/pedido`, {
      id: data.pedidoId,
      status: newStatus,
    });
  }
}
