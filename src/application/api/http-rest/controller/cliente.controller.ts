import { Body, Controller, Get, Inject, NotFoundException, Param, Post, Req, Session } from '@nestjs/common';
import { IIdentificaClientePort } from 'src/core/domain/cliente/ports/usecase/Iidentifica-cliente.port';
import { IIdentificaClienteUseCase } from 'src/core/domain/cliente/usecase/Iidentifica-cliente.usecase';
import { ICadastraClienteUseCase } from "../../../../core/domain/cliente/usecase/Icadastra-cliente.usecase";
import { RegistrarClienteDto } from '../dtos/registrarCliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(
    @Inject(ICadastraClienteUseCase)
    private cadastraClienteService: ICadastraClienteUseCase,

    @Inject(IIdentificaClienteUseCase)
    private identifiarClienteService: IIdentificaClienteUseCase,
  ) { }

  @Post()
  async registrar(@Body() { cpf, nome, email }: RegistrarClienteDto): Promise<any> {
    const cliente = await this.cadastraClienteService.execute({ cpf, nome, email });
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
