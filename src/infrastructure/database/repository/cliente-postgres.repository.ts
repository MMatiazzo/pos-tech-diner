import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from "../../../core/domain/cliente/entity/cliente.entity";
import { IClienteRepositoryPort } from "../../../core/domain/cliente/ports/persistence/Icliente-repository.port";
import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class ClientePostgresRepository implements IClienteRepositoryPort {

  constructor(
    @Inject(PrismaService)
    private prismaRepository: PrismaService
  ){}
  async setCliente(cliente: Cliente): Promise<Cliente> {
    const novoCliente = await this.prismaRepository.cliente.create({data: cliente});
    return novoCliente;
  }
  getCliente(cpf: string): Promise<Cliente> {
    throw new Error('Method not implemented.');
  }
  validaClienteExistente(cpf: string, email: string): Promise<Cliente[]> {
    throw new Error('Method not implemented.');
  }
} 