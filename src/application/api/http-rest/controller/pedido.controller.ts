import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Pedido } from 'src/core/domain/pedidos/entity/pedido.entity';
import { ICadastrarPedidoUseCase } from 'src/core/domain/pedidos/usecase/Icadastra-pedido.usecase';
import { IListaPedidoUseCase } from 'src/core/domain/pedidos/usecase/Ilista-pedido.usecase';
import { CadastrarPedidoDto } from '../dtos/cadastrarPedido.dto';
import { IGetPedidoPagamentoStatusUseCase } from 'src/core/domain/pedidos/usecase/Iget-pagamento-pedido-status.usecase';
import { PedidoPresenterAdapter } from '../presenter/cliente.adapter';
import { IAtualizarPedidoStatusUseCase } from 'src/core/domain/pedidos/usecase/Iatuliza-pedido-status.usecase';

@Controller('pedido')
export class PedidoController {
  constructor(
    @Inject(ICadastrarPedidoUseCase)
    private cadastrarPedidoService: ICadastrarPedidoUseCase,

    @Inject(IListaPedidoUseCase)
    private listarPedidoService: IListaPedidoUseCase,

    @Inject(IGetPedidoPagamentoStatusUseCase)
    private getPedidoPagamentoStatusService: IGetPedidoPagamentoStatusUseCase,

    @Inject(IAtualizarPedidoStatusUseCase)
    private atualizarPedidoStatusService: IAtualizarPedidoStatusUseCase,
  ) { }

  @Post()
  async cadastrar(@Body() payload: CadastrarPedidoDto): Promise<Pedido> {
    const pedido = await this.cadastrarPedidoService.execute(payload);
    return pedido;
  }

  @Get(':id')
  async getPagamentoPedidoStatus(@Param() { id }) {
    const pago = await this.getPedidoPagamentoStatusService.execute({ pedidoId: id });
    return PedidoPresenterAdapter.adaptPagamentoStatus(pago);
  }

  @Put()
  async attStatusPedido(@Body() { id, status }) {
    const pedidoAtualizado = await this.atualizarPedidoStatusService.execute({ pedidoId: id, novoStatus: status });
    return pedidoAtualizado;
  }


  @Get()
  async listar(): Promise<Pedido[]> {
    const pedidos = await this.listarPedidoService.execute();
    return pedidos;
  }
}
