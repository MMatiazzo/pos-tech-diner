import { Cliente } from "../entities/Cliente.entity";

export interface IClientesService {
  cadastrar(cpf: string, nome: string, email: string): Promise<Cliente>;
  identificar(cpf: string): Promise<Cliente> | null;
}
