import { Cliente } from '../entities/Cliente.entity';

/**
 * Interface for Clientes Repository, outbound port
 */
export interface IClientesRepository {
  create(cpf: string, nome: string, email: string): Promise<Cliente>;
  getByCpf(cpf: string): Promise<Cliente> | null;
}

export const IClientesRepository = Symbol('IClientesRepository');
