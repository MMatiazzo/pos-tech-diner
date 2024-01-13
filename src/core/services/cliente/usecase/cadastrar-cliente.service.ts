import { Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from  "../../../domain/cliente/ports/persistence/Icliente-repository.port";
import { ICadastraClientePort } from "../../../domain/cliente/ports/usecase/Icadastra-cliente.port";
import { ICadastraClienteUseCase } from "../../../domain/cliente/usecase/Icadastra-cliente.usecase";
import { Cliente } from "src/core/domain/cliente/entity/cliente.entity";

@Injectable()
export class CadastrarClienteService implements ICadastraClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort
  ) {}

  async execute(payload: ICadastraClientePort): Promise<Cliente> {
    const clienteEntity = await Cliente.new(payload);
    const cliente = await this.clienteRepository.setCliente(clienteEntity);
    return cliente;
  }
}