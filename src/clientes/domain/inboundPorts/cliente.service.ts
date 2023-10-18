import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { IClientesService } from './Icliente.service';
import { IClienteRepository } from '../outboundPorts/Icliente.repository';

@Injectable()
export class ClientesService implements IClientesService {
  constructor(
    @Inject(IClienteRepository)
    private clienteRepository: IClienteRepository
  ){}

  async cadastrarCliente(cpf: string, nome: string, email: string): Promise<Cliente | null> {

    const cpfOnlyNumbers = cpf.replace(/[^0-9]/g, '');

    const exists = await this.clienteRepository.validaClienteExistente(cpfOnlyNumbers, email);
    if(exists.length) {
      throw new HttpException('Email or CPF already registered', HttpStatus.UNAUTHORIZED);
    }

    const novoCliente = Cliente.criarCliente(cpfOnlyNumbers, nome, email);
    if(!novoCliente) {
      throw new HttpException('Cpf or email not valid', HttpStatus.BAD_REQUEST);
    }

    const clienteCadastrado = await this.clienteRepository.cadastrarCliente(novoCliente);
    return clienteCadastrado;
  }

  async identificarCliente(cpf: string): Promise<Cliente | any> {
    return await this.clienteRepository.pegaClientePorCpf(cpf);
  }
}
