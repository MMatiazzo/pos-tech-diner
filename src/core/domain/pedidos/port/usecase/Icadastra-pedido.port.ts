
export interface ICadastraPedidoPort {
  produtosIds: string[];
  cpf?: string;
  email?: string;
  session: Record<string, any>
}