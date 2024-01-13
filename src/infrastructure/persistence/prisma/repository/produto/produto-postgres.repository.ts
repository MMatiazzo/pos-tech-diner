import { Inject, Injectable } from '@nestjs/common';
import { IProdutoRepositoryPort } from 'src/core/domain/produtos/port/persistence/Iproduto-repository.port';
import { PrismaService } from "../../prisma.service";
import { Produto } from 'src/core/domain/produtos/entity/produto.entity';

@Injectable()
export class ProdutoPostgresRepository implements IProdutoRepositoryPort {
  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ){}

  async cadastrar(produto: Produto): Promise<Produto> {
    const novoProduto = await this.prisma.produtos.create({data: produto});
    return novoProduto;
  }
  editar(id: string, campo: string, valor: string | number | string[]): Promise<Produto> {
    throw new Error('Method not implemented.');
  }
  remover(id: string): Promise<Produto> {
    throw new Error('Method not implemented.');
  }
  buscar(categoria: string): Promise<Produto[]> {
    throw new Error('Method not implemented.');
  }
} 