import { Cliente } from '../entities/Cliente.entity';

/**
 * Interface for Clientes Repository, outbound port
 */
export interface IClientesRepository {
  criaClientes(cpf: string, nome: string, email: string): Promise<Cliente>;
  pegaClientePorCpf(cpf: string): Promise<Cliente> | null | Promise<any[]>;
}

export const IClientesRepository = Symbol('IClientesRepository');
