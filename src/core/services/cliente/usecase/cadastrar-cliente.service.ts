import { Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from  "../../../domain/cliente/ports/persistence/Icliente-repository.port";
import { ICadastraClientePort } from "../../../domain/cliente/ports/usecase/Icadastra-cliente.port";
import { ICadastraClienteUseCase } from "../../../domain/cliente/usecase/Icadastra-cliente.usecase";

@Injectable()
export class CadastrarClienteService implements ICadastraClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort
  ) {}

  execute(payload: ICadastraClientePort): Promise<void> {

    console.log('to-do-useCase #CadastrarCliente#');

    return; 
  }
}