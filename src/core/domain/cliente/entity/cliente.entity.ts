import { BadRequestException } from "@nestjs/common";
import { Cpf } from "./cpf.entity";
import { CriaClienteEntityPayload } from "./type/cria-cliente-entity.payload";

export class Cliente {
  cpf: string;
  nome: string;
  email: string;

  private constructor(payload: CriaClienteEntityPayload) {
    this.cpf = payload.cpf;
    this.nome = payload.nome;
    this.email = payload.email;
  }

  public static async new(payload: CriaClienteEntityPayload): Promise<Cliente | null> {
    const isValid: boolean = Cpf.validaCpf(payload.cpf);
    if(!isValid) throw new BadRequestException("CPF inválido");
    const cliente: Cliente = new Cliente(payload);
    return cliente;
  }
}
