import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICadastraProdutoUseCase } from 'src/core/domain/produtos/usecase/Icadastra-produto.usecase';
import { CadastrarProdutoDto } from '../dtos/cadastrarProduto.dto';

@Controller('produtoTeste')
export class ProdutoController {
  constructor(
    @Inject(ICadastraProdutoUseCase)
    private cadastraProdutoService: ICadastraProdutoUseCase,
    ) {}

  @Post()
  async cadastrar(@Body() payload: CadastrarProdutoDto): Promise<any> {
    const produto = this.cadastraProdutoService.execute(payload);
    return produto;
  }
}
