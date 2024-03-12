import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { IIdentificaClientePort } from "src/core/domain/cliente/ports/usecase/Iidentifica-cliente.port";
import { IIdentificaClienteUseCase } from "src/core/domain/cliente/usecase/Iidentifica-cliente.usecase";
import { IClienteRepositoryPort } from "../../../domain/cliente/ports/persistence/Icliente-repository.port";
import * as AWS from 'aws-sdk';

@Injectable()
export class IdentificaClienteService implements IIdentificaClienteUseCase {
  constructor(
    @Inject(IClienteRepositoryPort)
    private clienteRepository: IClienteRepositoryPort
  ) { }

  async execute({ cpf, session, password }: IIdentificaClientePort): Promise<any> {

    const userInfos = !cpf ? { cpf: '', password: '' } : { cpf, password };

    const cliente = await this.clienteRepository.getCliente(userInfos.cpf);

    if (!cliente) {
      throw new BadRequestException("CPF not found");
    }

    const serverlessPayload = { cpf: cliente.cpf, password: userInfos.password };

    AWS.config.update({
      region: 'us-east-1', // Replace with your AWS region
      accessKeyId: '', // Replace with your AWS access key ID
      secretAccessKey: '' // Replace with your AWS secret access key
    });

    const lambda = new AWS.Lambda();

    const params = {
      FunctionName: 'pos-tech-diner-authentication-function', // Replace with your Lambda function name
      Payload: JSON.stringify({ ...serverlessPayload }) // Payload to be sent to the Lambda function
    };

    const token = await lambda.invoke(params).promise();

    const clienteSession = !cpf ? null : cliente;

    session.auth = { token, cliente: clienteSession };

    return { ...cliente, token };
  }
}