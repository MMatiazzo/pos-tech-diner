
export interface ICadastraClientePort {
  cpf: string;
  nome: string;
  email: string;
  password: string;
  session: Record<string, any>
}