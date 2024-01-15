import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Pedido } from 'src/core/domain/pedidos/entity/pedido.entity';
import { ICadastrarPedidoUseCase } from 'src/core/domain/pedidos/usecase/Icadastra-pedido.usecase';
import { IListaPedidoUseCase } from 'src/core/domain/pedidos/usecase/Ilista-pedido.usecase';
import { CadastrarPedidoDto } from '../dtos/cadastrarPedido.dto';

@Controller('pedidosTeste')
export class PedidoController {
  constructor(
    @Inject(ICadastrarPedidoUseCase)
    private cadastrarPedidoService: ICadastrarPedidoUseCase,

    @Inject(IListaPedidoUseCase)
    private listarPedidoService: IListaPedidoUseCase,
  ) { }
  produtosIds: string[];
  status: string;
  cpf?: string;
  @Post()
  async registrar(@Body() payload: CadastrarPedidoDto): Promise<Pedido> {
    const pedido = await this.cadastrarPedidoService.execute(payload);
    return pedido;
  }

  @Get()
  async listar(): Promise<Pedido[]> {
    const pedidos = await this.listarPedidoService.execute();
    return pedidos;
  }
}
