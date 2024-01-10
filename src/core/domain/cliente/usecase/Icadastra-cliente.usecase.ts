import { ICadastraClientePort } from "../ports/usecase/Icadastra-cliente.port";

export interface ICadastraClienteUseCase {
  execute(payload: ICadastraClientePort): Promise<void>
}

export const ICadastraClienteUseCase = Symbol('ICadastraClienteUseCase');