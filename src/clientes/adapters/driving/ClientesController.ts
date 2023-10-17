import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClientesService } from 'src/clientes/domain/inboundPorts/ClienteService';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  // @Post()
  // async list(@Body() {cpf, nome, email}: any ): Promise<any> {
  //   console.log({cpf, nome, email})
  //   return await this.clientesService.cadastrar(cpf, nome, email);
  // }

  @Get()
  async teste(): Promise<any | Cliente> {
    console.log('entrei aqui 1');
    return await this.clientesService.identificar("123456");
  }
}
