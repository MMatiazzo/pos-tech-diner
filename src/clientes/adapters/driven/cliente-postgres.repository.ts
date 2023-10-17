import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/clientes/domain/entities/cliente.entity';
import { IClienteRepository } from 'src/clientes/domain/outboundPorts/Icliente.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientePostgresRepository implements IClienteRepository {

  constructor(
    private prismaRepository: PrismaService
  ){}

  async cadastrarCliente(novoCliente: Cliente): Promise<Cliente> {
    const cliente = await this.prismaRepository.cliente.create({data: novoCliente});
    return cliente;
  }

  async pegaClientePorCpf(cpf: string): Promise<Cliente | null> {
    const cliente = await this.prismaRepository.cliente.findUnique({where: { cpf }});
    return cliente;
  }

} 