import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Produto } from 'src/core/domain/produtos/entity/produto.entity';
import { ICadastraProdutoUseCase } from 'src/core/domain/produtos/usecase/Icadastra-produto.usecase';
import { IDeletarProdutoUseCase } from 'src/core/domain/produtos/usecase/Ideletar-produto.usecase';
import { IEditarProdutoUseCase } from 'src/core/domain/produtos/usecase/Ieditar-produto.usecase';
import { CadastrarProdutoDto } from '../dtos/cadastrarProduto.dto';
import { EditarPedidoDto } from '../dtos/editarProduto.dto';
import { IBuscarProdutoPorCategoriaUseCase } from 'src/core/domain/produtos/usecase/Ibuscar-produto-por-categoria.usecase';

@Controller('produtoTeste')
export class ProdutoController {
  constructor(
    @Inject(ICadastraProdutoUseCase)
    private cadastraProdutoService: ICadastraProdutoUseCase,

    @Inject(IDeletarProdutoUseCase)
    private deletarProdutoService: IDeletarProdutoUseCase,

    @Inject(IEditarProdutoUseCase)
    private editarProdutoService: IEditarProdutoUseCase,

    @Inject(IBuscarProdutoPorCategoriaUseCase)
    private buscarProdutoPorCategoriaSerice: IBuscarProdutoPorCategoriaUseCase
  ) { }

  @Post()
  async cadastrar(@Body() payload: CadastrarProdutoDto): Promise<any> {
    const produto = this.cadastraProdutoService.execute(payload);
    return produto;
  }

  @Get(':categoria')
  async buscarPorCategoria(@Param() { categoria }): Promise<Produto[]> {
    const produtos = this.buscarProdutoPorCategoriaSerice.execute({ categoria });
    return produtos;
  }

  @Put(':id')
  async editar(@Param('id') id: string, @Body() payload: EditarPedidoDto): Promise<Produto> {
    const produto = await this.editarProdutoService.execute({ ...payload, id })
    return produto;
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Produto> {
    const produto = await this.deletarProdutoService.execute({ id });
    return produto;
  }
}
