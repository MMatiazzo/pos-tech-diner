import { Body, Controller, Post } from '@nestjs/common';
import { Produto } from 'src/produtos/domain/entities/produto.entity';
import { ProdutosService } from 'src/produtos/domain/inboundPorts/produto.service';
import { CadastroDto } from './dtos/cadastro.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Post()
  async cadastrar(@Body() {nome, categoria, preco, descricao, imagens }: CadastroDto ): Promise<Produto> {
    const produto = await this.produtosService.cadastrar(nome, categoria, preco, descricao, imagens);
    return produto;
  }

  // @Get(':cpf')
  // async identificar(@Param('cpf') cpf: string): Promise<null | Cliente> {
    // const cliente =  await this.clientesService.identificarCliente(cpf);
    // if(!cliente) {
    //   throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    // }
    // return cliente;
  // }
}
