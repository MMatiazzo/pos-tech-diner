
export class PedidoPresenterAdapter {
  public static adaptPagamentoStatus(statusPago: boolean) {

    const message = !statusPago ? "Pagamento em processamento/Recusado" : "Pagamento Aprovado";

    return JSON.stringify({
      message,
      statusPago
    });
  }
}