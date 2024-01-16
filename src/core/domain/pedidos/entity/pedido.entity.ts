import { CriaPedidoEntityPayload } from "./type/cria-pedido-entity.payload";

export enum CardinalDirections {
  AGUARDANDO_PAGAMENTO = 'Aguardando Pagamento',
  PAGAMENTO_RECUSADO = 'Pagamento Recusado',
  PAGAMENTO_CONFIRMADO = 'Recebido',
  EM_PREPARACAO = "Em preparação",
  PRONTO = 'Pronto',
  FINALIZADO = 'Finalizado'
};

export class Pedido {
  status: string;
  cpf?: string;
  email?: string;

  private constructor(payload: CriaPedidoEntityPayload) {
    this.status = payload.status;
    if (payload.cpf) this.cpf = payload.cpf;
    if (payload.cpf) this.email = payload.email;
  }

  public static new(payload: CriaPedidoEntityPayload) {
    const pedido = new Pedido(payload);
    return pedido;
  }
}