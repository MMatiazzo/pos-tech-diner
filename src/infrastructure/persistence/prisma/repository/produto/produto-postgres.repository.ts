import { Inject, Injectable } from '@nestjs/common';
import { Produto } from 'src/core/domain/produtos/entity/produto.entity';
import { IProdutoRepositoryPort } from 'src/core/domain/produtos/port/persistence/Iproduto-repository.port';
import { PrismaService } from "../../prisma.service";

@Injectable()
export class ProdutoPostgresRepository implements IProdutoRepositoryPort {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) { }

  async cadastrar(produto: Produto): Promise<Produto> {
    const novoProduto = await this.prisma.produtos.create({ data: produto });
    return novoProduto;
  }

  async editar(id: string, campo: "nome" | "preco" | "descricao" | "categoria", valor: string | number | string[]): Promise<Produto | never> {
    const updateData = { [campo]: valor };
    const produtoCriado = await this.prisma.produtos.update({
      where: {
        id,
      },
      data: updateData
    });
    return produtoCriado;
  }

  async remover(id: string): Promise<Produto | null> {
    const produtoDeletado = await this.prisma.produtos.delete({
      where: {
        id,
      },
    });
    return produtoDeletado;
  }
  buscar(categoria: string): Promise<Produto[]> {
    throw new Error('Method not implemented.');
  }
} 