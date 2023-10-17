import { Cliente } from "../entities/Cliente.entity";

export interface IClientesService {
  cadastrar(cpf: string, nome: string, email: string): void;
  identificar(cpf: string): Promise<any | Cliente>;
}
