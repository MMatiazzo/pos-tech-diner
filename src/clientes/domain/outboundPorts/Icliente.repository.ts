import { Cliente } from '../entities/cliente.entity';

/**
 * Interface for Clientes Repository, outbound port
 */
export interface IClienteRepository {
  cadastrarCliente(cliente: Cliente): Promise<Cliente>;
  pegaClientePorCpf(cpf: string): Promise<Cliente | null>;
  validaClienteExistente(cpf: string, email: string): Promise<Cliente[] | null>;
}

export const IClienteRepository = Symbol('IClienteRepository');
