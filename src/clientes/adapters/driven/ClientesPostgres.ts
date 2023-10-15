import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/clientes/domain/entities/Cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesPostgres {

  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>
  ){}

  async criaCliente(cpf: string, nome: string, email: string) {
    const novoCliente = this.clientesRepository.create({cpf, nome, email});
    const clienteCadastrado = await this.clientesRepository.save(novoCliente);
    return clienteCadastrado; // Adjust to set it on db
  }

} 