import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from "../../../../../core/domain/cliente/entity/cliente.entity";
import { IClienteRepositoryPort } from "../../../../../core/domain/cliente/ports/persistence/Icliente-repository.port";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class ClientePostgresRepository implements IClienteRepositoryPort {

  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) { }

  async setCliente(cliente: Cliente): Promise<Cliente> {
    try {
      const novoCliente = await this.prisma.cliente.create({ data: cliente });
      return novoCliente;
    } catch (e) {
      console.error('error prisma => ', e);
    }
  }

  async getCliente(cpf: string): Promise<Cliente> {
    try {
      const cliente = await this.prisma.cliente.findUnique({ where: { cpf } });
      return cliente;
    } catch (e) {
      console.error('error prisma => ', e);
    }
  }

  validaClienteExistente(cpf: string, email: string): Promise<Cliente[]> {
    throw new Error('Method not implemented.');
  }
} 