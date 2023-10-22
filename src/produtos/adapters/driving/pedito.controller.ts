import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Produto } from 'src/produtos/domain/entities/produto.entity';
import { ProdutosService } from 'src/produtos/domain/inboundPorts/produto.service';
import { CadastroDto } from './dtos/cadastro.dto';
import { AtualizarDto } from './dtos/atualizar.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Post()
  async cadastrar(@Body() {nome, categoria, preco, descricao, imagens }: CadastroDto ): Promise<Produto> {
    const produto = await this.produtosService.cadastrar(nome, categoria, preco, descricao, imagens);
    return produto;
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<null | Produto> {
    const produto =  await this.produtosService.remover(id);
    if(!produto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return produto;
  }

  @Put(':id')
  async editar(@Param('id') id: string, @Body() { campo, valor }: AtualizarDto): Promise<Produto> {
    const produto =  await this.produtosService.editar(id,campo, valor);
    if(!produto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return produto;
  }

  @Get(':categoria')
  async buscar(@Param('categoria') categoria: string): Promise<Produto[]> {
    const produtos =  await this.produtosService.buscar(categoria);
    return produtos;
  }
}
