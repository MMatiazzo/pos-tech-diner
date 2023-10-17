import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/clientes/domain/entities/Cliente.entity';
import { IClientesRepository } from 'src/clientes/domain/outboundPorts/IClientesRepository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesPostgresRepository implements IClientesRepository {

  constructor(
    private prismaRepository: PrismaService
  ){}

  criaClientes(cpf: string, nome: string, email: string): Promise<Cliente> {
    throw new Error('Method not implemented.');
  }
  async pegaClientePorCpf(cpf: string): Promise<any> {
    console.log('entrei aqui 3');
    return await this.prismaRepository.cliente.findMany()
  }

} 