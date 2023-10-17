import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '../entities/Cliente.entity';
import { IClientesService } from './IClientesService';
import { IClientesRepository } from '../outboundPorts/IClientesRepository';
import { ClientesPostgresRepository } from 'src/clientes/adapters/driven/ClientesPostgres';

@Injectable()
export class ClientesService implements IClientesService {
  constructor(
    private clienteRepository: ClientesPostgresRepository
  ){}

  cadastrar(cpf: string, nome: string, email: string): void {
    this.clienteRepository.criaClientes(cpf, nome, email)
  }

  async identificar(cpf: string): Promise<any | Cliente> {
    console.log('entrei aqui 2');
    return await this.clienteRepository.pegaClientePorCpf(cpf);
  }
}
