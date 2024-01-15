import { Body, Controller, Delete, Inject, Param, Post } from '@nestjs/common';
import { ICadastraProdutoUseCase } from 'src/core/domain/produtos/usecase/Icadastra-produto.usecase';
import { CadastrarProdutoDto } from '../dtos/cadastrarProduto.dto';
import { Produto } from 'src/core/domain/produtos/entity/produto.entity';
import { IDeletarProdutoUseCase } from 'src/core/domain/produtos/usecase/Ideletar-produto.usecase';

@Controller('produtoTeste')
export class ProdutoController {
  constructor(
    @Inject(ICadastraProdutoUseCase)
    private cadastraProdutoService: ICadastraProdutoUseCase,

    @Inject(IDeletarProdutoUseCase)
    private deletarProdutoService: IDeletarProdutoUseCase,
  ) { }

  @Post()
  async cadastrar(@Body() payload: CadastrarProdutoDto): Promise<any> {
    const produto = this.cadastraProdutoService.execute(payload);
    return produto;
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Produto> {
    const produto = await this.deletarProdutoService.execute({ id });
    return produto;
  }
}
