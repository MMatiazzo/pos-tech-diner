import { Inject, Injectable } from "@nestjs/common";
import { IIdentificaClientePort } from "src/core/domain/cliente/ports/usecase/Iidentifica-cliente.port";
import { IIdentificaClienteUseCase } from "src/core/domain/cliente/usecase/Iidentifica-cliente.usecase";
import { IClienteRepositoryPort } from "../../../domain/cliente/ports/persistence/Icliente-repository.port";

@Injectable()
export class IdentificaClienteService implements IIdentificaClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort
  ) {}

  async execute({ cpf }: IIdentificaClientePort): Promise<any> {
    const cliente = await this.clienteRepository.getCliente(cpf);
    return cliente;
  }
}