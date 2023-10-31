# Como rodar o projeto

Clonar o projeto no github - https://github.com/MMatiazzo/pos-tech-diner
Entrar na pasta `pos-tech-diner`
Executar o comando `sudo docker-compose up --build`

# Endpoints

## End-point: cadastrar-pedido
### Method: POST
>```
>http://localhost:3333/pedidos
>```
### Body (**raw**)

```json
{
    "produtosIds": ["3a060fc8-d042-48aa-95fd-a1776847f30a"],
    "status": "recebido",
    "clienteCpf": "83626507025"
}
```

## End-point: listar-pedidos
### Method: GET
>```
>http://localhost:3333/pedidos
>```

## End-point: cadastrar-clientes
### Method: POST
>```
>http://localhost:3333/clientes
>```
### Body (**raw**)

```json
{
	"cpf": "836.265.070-25",
	"nome": "cliente teste",
	"email": "email677@email.com"
}
```

## End-point: pegar-cliente-por-cpf
### Method: GET
>```
>http://localhost:3333/clientes/83626507025
>```

## End-point: cadastrar
### Method: POST
>```
>http://localhost:3333/produtos
>```
### Body (**raw**)

```json
{
    "nome": "Batata doce de maromba",
    "categoria": "Sobremesa",
    "preco": 3,
    "descricao": "Batata doce nutritiva",
    "imagens": ["path1", "path2"]
}
```

## End-point: remover
### Method: DELETE
>```
>http://localhost:3333/produtos/32aae857-f5bd-4305-9877-230a687817ed
>```

## End-point: editar
### Method: PUT
>```
>http://localhost:3333/produtos/32aae857-f5bd-4305-9877-230a687817ed
>```
### Body (**raw**)

```json
{
    "campo": "nome",
    "valor": "Comida Editada"
}
```

## End-point: buscar
### Method: GET
>```
>http://localhost:3333/produtos/Sobremesa
>```

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