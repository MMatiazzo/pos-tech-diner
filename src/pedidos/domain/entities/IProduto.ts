
export interface IProduto {
  nome: string;
  categoria: 'Lanche' | 'Acompanhamento' | 'Bebida' | 'Sobremesa';
  preco: number;
  descricao: string;
  imagem: string[];
}