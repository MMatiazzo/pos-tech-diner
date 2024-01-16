import { IPaymentGatewayPort } from 'src/core/domain/pedidos/port/framework/payment/Ipayment-gateway.port';
import { IPaymentGateway } from '../Ipayment.gateway';
import axios from 'axios';

export class MercadoPago implements IPaymentGateway {
  public async createQrCode(data: IPaymentGatewayPort): Promise<any> {
    const url = `${process.env.MERCADO_PAGO_URL}${process.env.MERCADO_PAGO_USER_ID}/pos/${data.externalPosId}/qrs`;

    const body = {
      cash_out: {
        amount: data.cashOutAmount,
      },
      description: data.description,
      items: data.items.map((i) => ({
        sku_number: i.skuNumber,
        category: i.category,
        title: i.title,
        description: i.description,
        unit_price: i.unitPrice,
        quantity: i.quantity,
        unit_measure: i.unitMeasure,
        total_amount: i.totalAmount,
      })),
      notification_url: data.notificationURL,
      sponsor: {
        id: process.env.MERCADO_PAGO_USER_ID,
      },
      title: data.title,
      total_amount: data.totalAmount,
    };

    const response = await axios.post(url, JSON.stringify(body));
    console.log(response.data);
    return response.data;
  }
}
