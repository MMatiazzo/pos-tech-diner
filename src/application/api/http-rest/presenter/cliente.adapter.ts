
export class PedidoPresenterAdapter {
  public static adaptPagamentoStatus(statusPago: boolean) {

    const message = !statusPago ? "Aguardando Pagamento/Recusado" : "Pagamento Aprovado";

    return JSON.stringify({
      message,
      statusPago
    });
  }
}