import { Body, Controller, Get, Inject, NotFoundException, Param, Post } from '@nestjs/common';
import { ClienteFactory } from 'src/application/factory/cliente.factory';
import { IIdentificaClientePort } from 'src/core/domain/cliente/ports/usecase/Iidentifica-cliente.port';
import { IIdentificaClienteUseCase } from 'src/core/domain/cliente/usecase/Iidentifica-cliente.usecase';
import { ICadastraClienteUseCase } from "../../../../core/domain/cliente/usecase/Icadastra-cliente.usecase";
import { RegistrarClienteDto } from '../dtos/registrarCliente.dto';

@Controller('clientesTeste')
export class ClienteController {
  constructor(
    //use cases
    @Inject(ICadastraClienteUseCase)
    private cadastraClienteService: ICadastraClienteUseCase,

    @Inject(IIdentificaClienteUseCase)
    private identifiarClienteService: IIdentificaClienteUseCase,

    // factories
    @Inject(ClienteFactory)
    private clienteFactory: ClienteFactory,
    // add mais use cases conforme for necessário
    ) {}

  @Post()
  async registrar(@Body() {cpf, nome, email}: RegistrarClienteDto ): Promise<any> {
    const novoCliente = this.clienteFactory.fabricaCliente({cpf, nome, email});
    const cliente = await this.cadastraClienteService.execute(novoCliente);
    return cliente;
  }
  
  @Get(':cpf')
  async identificar(@Param() payload: IIdentificaClientePort): Promise<any> {
    const cliente =  await this.identifiarClienteService.execute(payload);
    if(!cliente) {
      throw new NotFoundException;
    }
    return cliente;
  }
}
