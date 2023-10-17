import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { IClientesService } from './Icliente.service';
import { IClienteRepository } from '../outboundPorts/Icliente.repository';

@Injectable()
export class ClientesService implements IClientesService {
  constructor(
    @Inject(IClienteRepository)
    private clienteRepository: IClienteRepository
  ){}

  async cadastrarCliente(cpf: string, nome: string, email: string): Promise<Cliente> {
    const novoCliente = Cliente.criarCliente(cpf, nome, email);
    const clienteCadastrado = await this.clienteRepository.cadastrarCliente(novoCliente);
    return clienteCadastrado;
  }

  async identificarCliente(cpf: string): Promise<Cliente | any> {
    return await this.clienteRepository.pegaClientePorCpf(cpf);
  }
}
