import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Produto } from '../../../domain/produtos/entity/produto.entity';
import { IProdutoRepositoryPort } from '../../../domain/produtos/port/persistence/Iproduto-repository.port';
import { ICadastraProdutoPort } from '../../../domain/produtos/port/usecase/Icadastra-produto.port';
import { ICadastraProdutoUseCase } from '../../../domain/produtos/usecase/Icadastra-produto.usecase';

@Injectable()
export class CadastrarProdutoService implements ICadastraProdutoUseCase {
  constructor(
    @Inject(IProdutoRepositoryPort)
    private produtoRepository: IProdutoRepositoryPort,
  ) { }

  async execute(payload: ICadastraProdutoPort): Promise<Produto> {
    if (
      !['Lanche', 'Sobremesa', 'Acompanhamento', 'Bebida'].includes(
        payload.categoria,
      )
    ) {
      throw new BadRequestException('Categoria não permitida');
    }
    const produtoEntity = Produto.new(payload);
    const produto = await this.produtoRepository.cadastrar(produtoEntity);
    return produto;
  }
}
