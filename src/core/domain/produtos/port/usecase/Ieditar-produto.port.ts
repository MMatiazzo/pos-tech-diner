export interface IEditarProdutoPort {
  id: string;
  campo: "nome" | "preco" | "descricao" | "categoria",
  valor: string | number | string[]
}