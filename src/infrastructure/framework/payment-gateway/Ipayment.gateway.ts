import { IPaymentMockGatewayPort } from 'src/core/domain/pedidos/port/framework/payment/IPayment-mock-gateway.port';
import { IPaymentGatewayPort } from 'src/core/domain/pedidos/port/framework/payment/Ipayment-gateway.port';

export interface IPaymentGateway {
  createQrCode(data: IPaymentGatewayPort): Promise<any>;
  makePayment(data: IPaymentMockGatewayPort): Promise<void>;
}
