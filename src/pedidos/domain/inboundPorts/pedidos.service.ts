import { Inject, Injectable } from "@nestjs/common";
import { Pedido } from "../entities/pedido.entity";
import { IPedidosService } from "./Ipedidos.service";
import { IPedidosRepository } from "../outboundPorts/Ipedido.repository";

@Injectable()
export class PedidosService implements IPedidosService {
  constructor(
    @Inject(IPedidosRepository)
    private pedidoRepository: IPedidosRepository
  ){}

  async criar(produtosIds: string[], status: string, clienteCpf?: string): Promise<Pedido> {
    const pedido = await this.pedidoRepository.criar(produtosIds, status, clienteCpf);
    return pedido;
  }

  async listar(): Promise<Pedido[]> {
    const pedidos = await this.pedidoRepository.listar();
    return pedidos;
  }
}