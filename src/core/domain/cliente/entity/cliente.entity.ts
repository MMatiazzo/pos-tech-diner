import { Cpf } from "./cpf.entity";

export class Cliente {
  cpf: Cpf;
  nome: string;
  email: string;

  static criarCliente(cpf: string, nome: string, email: string): Cliente {
    const novoCliente = new Cliente();
    novoCliente.cpf = new Cpf(cpf);
    novoCliente.nome = nome;
    novoCliente.email = email;

    return novoCliente;
  }
}
