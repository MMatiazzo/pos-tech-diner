# Como rodar o projeto

Clonar o projeto no github - https://github.com/MMatiazzo/pos-tech-diner
Entrar na pasta `pos-tech-diner`
Executar o comando `kubectl apply -f postgres.yml`
Executar o comando `kubectl apply -f pos-tech-diner.yml`
Executar o comando `kubectl apply -f hpa.yml`

**As rotas abaixo estão divididas da seguinte forma:**
- **Rotas na ordem recomendada de utilização.**
- **Demais rotas implementadas pela aplicação.**

# Rotas na ordem recomendada de utilização:

# Endpoints

## End-point: cadastrar-usuário (opcional)
### Method: POST
>```
>localhost:30000/cliente
>```
### Body (**raw**)
```json
{
	"cpf": "71731185065", 
	"nome": "José",
	"email": "jose@email.com"
}
```

## End-point: cadastrar-produto
### Method: POST
>```
>http://localhost:30000/produto
>```
### Body (**raw**)

As categorias aqui podem ser uma das seguintes:
Lanche, Sobremesa, Acompanhamento, Bebida

```json
{
    "nome": "Big Mac",
    "categoria": "Lanche",
    "preco": 100,
    "descricao": "Um lanche para todos.",
    "imagens": ["path1", "path2"]
}
```


## End-point: buscar-produto-por-categoria
### Method: GET
>```
>http://localhost:3333/produtos/:categoria
>
>exemplo: http://localhost:3333/produtos/Lanche
>Categorias podem ser somente (Lanche | Sobremesa | Acompanhamento | Bebida)
>```

## End-point: cadastrar-pedido
### Method: POST
>```
>http://localhost:30000/pedido
>```
### Body (**raw**)
O atributo email é opcinal, caso não queira se identificar, retire-o.
```json
{
    "produtosIds": ["f22db003-9505-4408-a7ad-a6b54f15eb84", "09e2d30f-544b-4ad7-815e-645cfbdbfd44"],
    "email": "jose@email.com"
}
```
## End-point: listar-pedidos
### Method: GET
Os pedidos são listados na seguinte ordem:
1 - status: **Pronto** > **Em Preparação** > **Recebido**;
2 - Pedido mais antigos primeiro e mais novos depois;
3 - Pedidos finalizados não aparecem na listagem;
>```
>http://localhost:30000/pedido
>```

## End-point: pagar-pedido
### Method: POST
>```
>http://localhost:30000/pedido/pagar
>```
### Body (**raw**)
Aqui fizemos um mock de pagamento seguindo os padrões do marcado pago. O cartão mock (5031433215406351) paga o pedido, qualquer outro leva à pagamento recusado.
```json
{
    "pedidoId": "310e66a2-3b76-4208-b97e-79e73117edc9",
    "cartao": "5031433215406351"
}
```

## End-point: verificar-status-pagamento-pedido
### Method: GET
>```
>http://localhost:30000/pedido/:pedidoId
>
>exemplo: http://localhost:30000/pedido/d660b825-0b0e-499d-813e-1dca47286ef8
>```

# Demais rotas implementadas pela aplicação:

## End-point: wook-editar-status-pedido
### Method: PUT
>```
>http://localhost:30000/pedido
>```
### Body (**raw**)
Status do pedido devem estar entre os seguintes status:
Aguardando_Pagamento, Pagamento_Recusado, Recebido, Pronto, Finalizado
```json
{
    "id": "d660b825-0b0e-499d-813e-1dca47286ef8",
    "status": "Recebido"
}
```

## End-point: buscar-cliente-por-email-ou-cpf
### Method: GET
>```
>http://localhost:30000/cliente/:cpfOrEmail
>
>exemplo: http://localhost:30000/cliente/71731185065
>exemplo-2: http://localhost:30000/cliente/jose@email.com.br
>```

## End-point: remover-produto-por-id
### Method: DELETE
>```
>http://localhost:30000/produto/:produtoId
>
>http://localhost:30000/produto/54a808ed-de5c-4a49-8ccc-0e185e91d236
>```

## End-point: editar-produto-por-id
### Method: PUT
>```
>http://localhost:30000/produto/54a808ed-de5c-4a49-8ccc-0e185e91d236
>```
### Body (**raw**)
Campos: "nome", "descricao" e "categoria" são tipo "string"
Campo: "preco" é tipo "number"
Campo: "imagens" é do tipo "string[]"
```json
{
    "campo": "nome",
    "valor": "Nome editado"
}
```

# Linguagem Ubíqua

__Realizar Pedido:__
Cliente: Refere-se a pessoa que faz os pedidos na lanchonete.

Pedido: A solicitação feita por um cliente para adquirir produtos da lanchonete.

Sistema da lanchonete: Sistema que faz o relacionamento entre os clientes e a lanchonete. Controla pedidos e status.

Cozinha: Local onde os pedidos feitos através do sistema da lanchonete são preparados

Fila de Pedidos: Parte do sistema onde são encontrados e ordenados os pedidos feitos.

Pagamento: Registro que comprova que o pedido foi pago.

__Preparo e entrega do Pedido:__
Atendente: Funcionário responável por entregar os pedidos aos clientes e atualizar o status no sistema.

__Identificação:__
Cadastro: Tela onde o cliente se cadastra no sistema utilizando nome e email.

Identificação: Meio utilizado por clientes já cadastrados para se identificarem no sistema.

# Link do Event Storming
[Event Storming - Miro](https://miro.com/app/board/uXjVNexvhM8=/?share_link_id=118973744778)

## JSON POSTMAN 
A documentação extraída do postman está no arquivo chamado ***dinner.postman_collection.json*** na raiz do projeto. 
Nela tem uma pasta chamada ***passo-a-passo*** onde estão as rotas que foram descritas em sequência de passos nesse README.
Todas as demais rotas descritas aqui estão em uma das outras pastas.