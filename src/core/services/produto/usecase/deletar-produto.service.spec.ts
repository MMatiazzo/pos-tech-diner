import { ProdutoMockRepository } from '../../../../infrastructure/persistence/prisma/repository/produto/produto-mock.repository';
import { PedidoMockRepository } from '../../../../infrastructure/persistence/prisma/repository/pedido/pedido-mock.repository';
import { DeletarProdutoService } from './deletar-produto.service';

describe('Deletar produto service', () => {
  let produtoRepository: ProdutoMockRepository;
  let pedidoRepository: PedidoMockRepository;
  let deletarProdutoService: DeletarProdutoService;

  beforeEach(() => {
    pedidoRepository = new PedidoMockRepository();
    produtoRepository = new ProdutoMockRepository();
    deletarProdutoService = new DeletarProdutoService(
      produtoRepository,
      pedidoRepository,
    );
  });

  describe('Deletar produto', () => {
    it('Deve ser possível deletar um produto', async () => {
      const idProduto = '1';

      const produtoDeletado = await deletarProdutoService.execute({
        id: idProduto,
      });

      expect(produtoDeletado.nome).toEqual('produto teste');
    });
  });
});
