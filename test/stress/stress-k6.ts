import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: '30s',
}

export default function () {

  // Lista pedidos
  http.get('http://localhost:3333/pedidos');

  // Pega cliente pelo CPF
  http.get('http://localhost:3333/clientes/83626507025');

  // Lista produtos pela categoria 'Sobremesa'
  http.get('http://localhost:3333/produtos/Sobremesa');

  // Cadastra produto
  const payloadProduto = JSON.stringify({
    "nome": "Churros",
    "categoria": "Sobremesa",
    "preco": 15,
    "descricao": "Churros de doce de leite super delicioso",
    "imagens": ["path1", "path2"]
  });
  http.post('http://localhost:3333/produtos', payloadProduto, 
  {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Atualiza produto
  const payloadAtualizaProduto = JSON.stringify({
    "campo": "nome",
    "valor": "Comida Editada"
});
  http.post('http://localhost:3333/produtos/32aae857-f5bd-4305-9877-230a687817ed', payloadAtualizaProduto, 
  {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  sleep(1);
}