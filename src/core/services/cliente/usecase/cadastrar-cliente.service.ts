import { Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from  "../../../domain/cliente/ports/persistence/Icliente-repository.port";
import { ICadastraClientePort } from "../../../domain/cliente/ports/usecase/Icadastra-cliente.port";
import { ICadastraClienteUseCase } from "../../../domain/cliente/usecase/Icadastra-cliente.usecase";
import { Cliente } from "@prisma/client";

@Injectable()
export class CadastrarClienteService implements ICadastraClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort
  ) {}

  async execute(payload: ICadastraClientePort): Promise<Cliente> {
    const cliente = await this.clienteRepository.setCliente(payload);
    return cliente;
  }
}