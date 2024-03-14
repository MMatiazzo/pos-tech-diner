import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IClienteRepositoryPort } from "../../../domain/cliente/ports/persistence/Icliente-repository.port";
import { ICadastraClientePort } from "../../../domain/cliente/ports/usecase/Icadastra-cliente.port";
import { ICadastraClienteUseCase } from "../../../domain/cliente/usecase/Icadastra-cliente.usecase";
import { Cliente } from "src/core/domain/cliente/entity/cliente.entity";
import { IAuthLambdaGateway } from "src/infrastructure/framework/aws/lambda/Iauth-lambda.gateway";

@Injectable()
export class CadastrarClienteService implements ICadastraClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort,

    @Inject(IAuthLambdaGateway)
    private authLambda: IAuthLambdaGateway
  ) { }

  async execute(payload: ICadastraClientePort): Promise<any> {
    const clienteEntity = await Cliente.new(payload);

    const clienteExists = await this.clienteRepository.getCliente(clienteEntity.email);
    if (clienteExists) {
      throw new BadRequestException('Cliente já existe');
    }

    const cliente = await this.clienteRepository.setCliente(clienteEntity);

    const token = await this.authLambda.authorization(
      cliente.cpf,
      payload.password,
      true,
      cliente.nome,
      cliente.email
    );

    if (token?.StatusCode !== 200) {
      throw new BadRequestException("Error on signup");
    }

    payload.session.auth = { token, cliente: cliente };

    return { ...cliente, token };
  }
}
