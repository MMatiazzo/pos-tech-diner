import { Cpf } from "../../entity/cpf.entity";

export interface ICadastraClientePort {
  cpf: string;
  nome: string;
  email: string;
}