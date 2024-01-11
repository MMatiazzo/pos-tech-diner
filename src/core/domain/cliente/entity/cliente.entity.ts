
export class Cliente {
  cpf: string;
  nome: string;
  email: string;

  static criarCliente(cpf: string, nome: string, email: string): Cliente {
    const novoCliente = new Cliente();
    novoCliente.cpf = cpf;
    novoCliente.nome = nome;
    novoCliente.email = email;

    return novoCliente;
  }
}
