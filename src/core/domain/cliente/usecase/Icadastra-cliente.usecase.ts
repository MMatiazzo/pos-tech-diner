import { Cliente } from "@prisma/client";
import { ICadastraClientePort } from "../ports/usecase/Icadastra-cliente.port";

export interface ICadastraClienteUseCase {
  execute(payload: ICadastraClientePort): Promise<Cliente>
}

export const ICadastraClienteUseCase = Symbol('ICadastraClienteUseCase');