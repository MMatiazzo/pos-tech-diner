import { Cliente } from '../../../../../core/domain/cliente/entity/cliente.entity';
import { IClienteRepositoryPort } from '../../../../../core/domain/cliente/ports/persistence/Icliente-repository.port';

export class ClienteMockRepository implements IClienteRepositoryPort {
  clientes: Cliente[] = [];

  async setCliente(cliente: Cliente): Promise<Cliente> {
    try {
      this.clientes.push(cliente);
      return cliente;
    } catch (e) {
      console.error('error prisma => ', e);
    }
  }

  async getCliente(field: string): Promise<Cliente> {
    try {
      const cliente = this.clientes.find(
        (c) => c.email === field || c.cpf === field,
      );

      return cliente;
    } catch (e) {
      console.error('error prisma => ', e);
    }
  }

  validaClienteExistente(cpf: string, email: string): Promise<Cliente[]> {
    throw new Error('Method not implemented.');
  }
}
