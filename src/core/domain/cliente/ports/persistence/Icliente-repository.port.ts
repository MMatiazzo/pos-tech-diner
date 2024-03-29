import { Cliente } from "../../entity/cliente.entity";

/**
 * Interface para Cliente Repository
 */
export interface IClienteRepositoryPort {
  setCliente(cliente: Cliente): Promise<Cliente>;
  getCliente(cpf: string): Promise<Cliente | null>;
  validaClienteExistente(cpf: string, email: string): Promise<Cliente[] | null>;
}

export const IClienteRepositoryPort = Symbol('IClienteRepositoryPort');
