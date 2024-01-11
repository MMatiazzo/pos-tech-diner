import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClienteFactory } from 'src/application/factory/cliente.factory';
import { ICadastraClienteUseCase } from "../../../../core/domain/cliente/usecase/Icadastra-cliente.usecase";
import { RegistrarClienteDto } from '../dtos/registrarCliente.dto';

@Controller('clientesTeste')
export class ClienteController {
  constructor(
    @Inject(ICadastraClienteUseCase)
    private cadastraClienteService: ICadastraClienteUseCase,

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
}
