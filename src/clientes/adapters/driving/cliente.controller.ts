import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Cliente } from '@prisma/client';
import { ClientesService } from 'src/clientes/domain/inboundPorts/cliente.service';

@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Post()
  async registrar(@Body() {cpf, nome, email}: Cliente ): Promise<Cliente> {
    return await this.clientesService.cadastrarCliente(cpf, nome, email);
  }

  @Get(':cpf')
  async identificar(@Param('cpf') cpf: string): Promise<null | Cliente> {
    const cliente =  await this.clientesService.identificarCliente(cpf);
    if(!cliente) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return cliente;
  }
}
