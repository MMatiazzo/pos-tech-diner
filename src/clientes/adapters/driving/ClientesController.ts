import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesService } from 'src/clientes/domain/inboundPorts/ClienteService';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Post()
  async list(@Body() {cpf, nome, email}: any ): Promise<any> {
    console.log({cpf, nome, email})
    return await this.clientesService.cadastrar(cpf, nome, email);
  }
}
