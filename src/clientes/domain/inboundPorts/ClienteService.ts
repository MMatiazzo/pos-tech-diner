import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from '../entities/Cliente.entity';
import { IClientesService } from './IClientesService';
import { ClientesPostgres } from 'src/clientes/adapters/driven/ClientesPostgres';
import { IClientesRepository } from '../outboundPorts/IClientesRepository';

@Injectable()
export class ClientesService implements IClientesService {
  constructor(
    @Inject(IClientesRepository)
    private clientesRepository: ClientesPostgres
  ){}

  async cadastrar(cpf: string, nome: string, email: string): Promise<Cliente> {
    console.log('this => ', this);
    const novoCliente = await this.clientesRepository.criaCliente(cpf, nome, email);
    return novoCliente;
  }

  identificar(cpf: string): Promise<Cliente> | null {
    return null; // Adjust to get cliente from db
  }
}
