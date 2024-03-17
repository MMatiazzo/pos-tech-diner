import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IIdentificaClientePort } from "src/core/domain/cliente/ports/usecase/Iidentifica-cliente.port";
import { IIdentificaClienteUseCase } from "src/core/domain/cliente/usecase/Iidentifica-cliente.usecase";
import { IClienteRepositoryPort } from "../../../domain/cliente/ports/persistence/Icliente-repository.port";
import { env } from "process";
import { IAuthLambdaGateway } from "src/infrastructure/framework/aws/lambda/Iauth-lambda.gateway";

@Injectable()
export class IdentificaClienteService implements IIdentificaClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort,

    @Inject(IAuthLambdaGateway)
    private authLambda: IAuthLambdaGateway
  ) { }

  async execute({ cpf, session, password, authenticate }: IIdentificaClientePort): Promise<any> {

    if (authenticate && (!cpf || !password)) {
      throw new BadRequestException('Precisamos do CPF e do PASSWORD para autenticarmos o signin');
    }

    console.log("env.DEFAULT_COGNITO_CPF => ", env.DEFAULT_COGNITO_CPF);
    console.log("env.DEFAULT_COGNITO_PASSWORD => ", env.DEFAULT_COGNITO_PASSWORD);

    const userInfos = !authenticate ?
      { cpf: env.DEFAULT_COGNITO_CPF, password: env.DEFAULT_COGNITO_PASSWORD } :
      { cpf, password };

    const cliente = await this.clienteRepository.getCliente(userInfos.cpf);

    if (!cliente) {
      throw new BadRequestException("CPF not found");
    }

    const serverlessPayload = { cpf: cliente.cpf, password: userInfos.password };

    const clienteSession = !authenticate ? null : cliente;

    const token = await this.authLambda.authorization(
      serverlessPayload.cpf,
      serverlessPayload.password,
      false,
      null,
      null,
    );

    if (token?.StatusCode !== 200) {
      throw new BadRequestException("Error on signup");
    }

    session.auth = { token, cliente: clienteSession };

    return { ...cliente, token };
  }
}