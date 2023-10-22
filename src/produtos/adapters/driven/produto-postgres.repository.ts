import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/clientes/domain/entities/cliente.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Produto } from 'src/produtos/domain/entities/produto.entity';
import { IProdutoRepository } from 'src/produtos/domain/outboundPorts/Iproduto.repository';

@Injectable()
export class ProdutoPostresRepository implements IProdutoRepository {

  constructor(
    private prismaRepository: PrismaService
  ){}
  async cadastrar(novoProduto: Produto): Promise<Produto> {
    const produtoCriado = await this.prismaRepository.produtos.create({data: novoProduto});
    return produtoCriado;
  }
  editar(id: string): Promise<Produto> {
    throw new Error('Method not implemented.');
  }
  remover(id: string): Promise<Produto> {
    throw new Error('Method not implemented.');
  }
  buscar(key: string[]): Promise<Produto[]> {
    throw new Error('Method not implemented.');
  }

  // async cadastrar(novoCliente: Cliente): Promise<Cliente> {
  //   const cliente = await this.prismaRepository.cliente.create({data: novoCliente});
  //   return cliente;
  // }

  // async pegaClientePorCpf(cpf: string): Promise<Cliente | null> {
  //   const cliente = await this.prismaRepository.cliente.findUnique({where: { cpf }});
  //   return cliente;
  // }

  // async validaClienteExistente(cpf: string, email: string): Promise<Cliente[] | null> {
  //   const cliente = await this.prismaRepository.cliente.findMany({
  //     where: {
  //       OR: [ 
  //         {cpf}, 
  //         {email}
  //       ] 
  //     }
  //   });
  //   return cliente;
  // }
} 