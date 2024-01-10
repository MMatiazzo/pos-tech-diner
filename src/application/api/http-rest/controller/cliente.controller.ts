import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICadastraClienteUseCase } from  "../../../../core/domain/cliente/usecase/Icadastra-cliente.usecase";

@Controller('clientesTeste')
export class ClienteController {
  constructor(
    @Inject(ICadastraClienteUseCase)
    private cadastraClienteUseCase: ICadastraClienteUseCase,
    // add mais use cases conforme for necessário
    ) {}

  @Post()
  async registrar(@Body() {cpf, nome, email}: any ): Promise<any> {
    console.log('entrei no controller de cadastrar cliente');
    const cliente = await this.cadastraClienteUseCase.execute({cpf, nome, email});
    return "cliente";
  }
}
