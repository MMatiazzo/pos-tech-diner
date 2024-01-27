import { Inject, Injectable } from '@nestjs/common';
import { Cliente } from "../../../../../core/domain/cliente/entity/cliente.entity";
import { IClienteRepositoryPort } from "../../../../../core/domain/cliente/ports/persistence/Icliente-repository.port";
import { PrismaService } from "../../prisma.service";
import { Prisma } from '@prisma/client';

type ClienteWhereUniqueInput = Prisma.ClienteWhereUniqueInput;

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

  async getCliente(field: string): Promise<Cliente> {
    try {
      const cliente = await this.prisma.cliente.findMany({
        where: {
          OR: [
            {
              email: field
            },
            { cpf: field },
          ]
        },
      });

      return cliente[0];
    } catch (e) {
      console.error('error prisma => ', e);
    }
  }

  validaClienteExistente(cpf: string, email: string): Promise<Cliente[]> {
    throw new Error('Method not implemented.');
  }
} 