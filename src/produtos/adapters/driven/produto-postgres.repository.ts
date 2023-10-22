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

  async editar(id: string, campo: string, valor: string | number | string[]): Promise<Produto | never> {
    const updateData = { [campo]: valor };
    const produtoCriado = await this.prismaRepository.produtos.update({
      where: {
        id,
      },
      data:  updateData
    });
    return produtoCriado;
  }

  async remover(id: string): Promise<Produto | null> {
    const produtoCriado = await this.prismaRepository.produtos.delete({where: {
        id,
      },
    });
    return produtoCriado;
  }

  async buscar(categoria: string): Promise<Produto[]> {
    const produtos = await this.prismaRepository.produtos.findMany({ where: { categoria } });
    return produtos;
  }
} 