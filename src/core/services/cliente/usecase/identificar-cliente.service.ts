import { Inject, Injectable } from "@nestjs/common";
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
    const cliente = await this.clienteRepository.getCliente(cpf);

    const serverlessPayload = { cpf: cliente.cpf, password };

    AWS.config.update({
      region: 'us-east-1', // Replace with your AWS region
      accessKeyId: 'AKIAVQDOH4WS7O45EZGK', // Replace with your AWS access key ID
      secretAccessKey: 'u6jk0ue/J4sVMHB++3Uzim6sWaprnYDJ3gLctqDw' // Replace with your AWS secret access key
    });

    const lambda = new AWS.Lambda();

    const params = {
      FunctionName: 'pos-tech-diner-authentication-function', // Replace with your Lambda function name
      Payload: JSON.stringify({ ...serverlessPayload }) // Payload to be sent to the Lambda function
    };

    const token = await lambda.invoke(params).promise();

    session.auth = token;

    return cliente;
  }
}