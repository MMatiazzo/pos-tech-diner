import { Cliente } from "../entities/cliente.entity";

export interface IClientesService {
  cadastrarCliente(cpf: string, nome: string, email: string): Promise<Cliente>;
  identificarCliente(cpf: string): Promise<null | Cliente>;
}
