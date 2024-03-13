import { ProdutoMockRepository } from '../../../../infrastructure/persistence/prisma/repository/produto/produto-mock.repository';
import { EditarProdutoService } from './editar-produto.service';

describe('Editar produto service', () => {
  let produtoRepository: ProdutoMockRepository;
  let editarProdutoService: EditarProdutoService;

  beforeEach(() => {
    produtoRepository = new ProdutoMockRepository();
    editarProdutoService = new EditarProdutoService(produtoRepository);
  });

  describe('Editar produto', () => {
    it('Deve ser possível cadastrar um novo produto', async () => {
      const editarProduto = {
        id: '1',
        campo: 'nome' as const,
        valor: 'produto editado',
      };

      const produtoEditado = await editarProdutoService.execute(editarProduto);

      expect(produtoEditado.nome).toEqual(editarProduto.valor);
    });
  });
});
