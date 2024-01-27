import { Cliente } from "@prisma/client";
import { IIdentificaClientePort } from "../ports/usecase/Iidentifica-cliente.port";

export interface IIdentificaClienteUseCase {
  execute(payload: IIdentificaClientePort): Promise<Cliente>
}

export const IIdentificaClienteUseCase = Symbol('IIdentificaClienteUseCase');