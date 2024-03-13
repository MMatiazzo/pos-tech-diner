import { ProdutoMockRepository } from '../../../../infrastructure/persistence/prisma/repository/produto/produto-mock.repository';
import { CadastrarProdutoService } from './cadastrar-produto.service';

describe('Cadastrar produto service', () => {
  let produtoRepository: ProdutoMockRepository;
  let cadastraProdutoService: CadastrarProdutoService;

  beforeEach(() => {
    produtoRepository = new ProdutoMockRepository();
    cadastraProdutoService = new CadastrarProdutoService(produtoRepository);
  });

  describe('Cadastra produto', () => {
    it('Deve ser possível cadastrar um novo produto', async () => {
      const novoProduto = {
        nome: 'produto teste',
        categoria: 'Lanche',
        preco: 10,
        descricao: 'produto teste',
        imagens: [],
      };

      const produto = await cadastraProdutoService.execute(novoProduto);

      expect(produto).toEqual(novoProduto);
    });
  });
});
