export interface IEditarProdutoPort {
  id: string;
  campo: "nome" | "preco" | "descricao" | "categoria" | "imagens",
  valor: string | number | string[]
}