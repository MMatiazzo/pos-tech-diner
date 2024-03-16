import { Body, Controller, Get, Inject, NotFoundException, Param, Post, Req, Session } from '@nestjs/common';
import { IIdentificaClientePort } from 'src/core/domain/cliente/ports/usecase/Iidentifica-cliente.port';
import { IIdentificaClienteUseCase } from 'src/core/domain/cliente/usecase/Iidentifica-cliente.usecase';
import { ICadastraClienteUseCase } from "../../../../core/domain/cliente/usecase/Icadastra-cliente.usecase";
import { RegistrarClienteDto } from '../dtos/registrarCliente.dto';
import { PrismaService } from 'src/infrastructure/persistence/prisma/prisma.service';

@Controller('cliente')
export class ClienteController {
  constructor(
    @Inject(ICadastraClienteUseCase)
    private cadastraClienteService: ICadastraClienteUseCase,

    @Inject(IIdentificaClienteUseCase)
    private identifiarClienteService: IIdentificaClienteUseCase,
  ) { }

  static async initialPop() {
    const prismaService = new PrismaService();

    const clienteExiste = await prismaService.cliente.findFirst({ where: { cpf: "98802057079" } });

    if (!clienteExiste) {
      await prismaService.cliente.create({
        data: {
          cpf: "98802057079",
          nome: "defaultuser",
          email: "defaultuser@email.com"
        }
      })
    }
  }

  @Post('/signup')
  async registrar(
    @Session() session: Record<string, any>,
    @Body() { cpf, nome, email, password }: RegistrarClienteDto
  ): Promise<any> {
    const cliente = await this.cadastraClienteService.execute({ cpf, nome, email, password, session });
    return cliente;
  }

  @Post('/signin')
  async signin(
    @Session() session: Record<string, any>,
    @Body() payload: IIdentificaClientePort
  ): Promise<any> {
    const cliente = await this.identifiarClienteService.execute({ ...payload, session });

    if (!cliente) {
      throw new NotFoundException;
    }
    return cliente;
  }
}
