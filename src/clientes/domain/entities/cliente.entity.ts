export class Cliente {
  cpf: string;
  nome: string;
  email: string;

  static criarCliente(cpf: string, nome: string, email: string): Cliente {
    // fazer a validação de CPF e EMAIL

    const novoCliente = new Cliente();
    novoCliente.cpf = cpf;
    novoCliente.nome = nome;
    novoCliente.email = email;

    return novoCliente;
  }

}
