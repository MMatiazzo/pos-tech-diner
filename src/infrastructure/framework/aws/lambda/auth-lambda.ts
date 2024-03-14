import * as AWS from 'aws-sdk';
import { env } from "process";
import { IAuthLambdaGateway } from './Iauth-lambda.gateway';

export class AuthLambda implements IAuthLambdaGateway {
  async authorization(
    cpf: string,
    password: string,
    signup: boolean,
    username: string | null,
    email: string | null,
  ) {

    AWS.config.update({
      region: env.MY_AWS_REGION,
      accessKeyId: env.AWS_LAMBDA_SDK_ACCESS_KEY,
      secretAccessKey: env.AWS_LAMBDA_SECRET_ACCESS_KEY
    });

    const lambda = new AWS.Lambda();

    const params = {
      FunctionName: env.AWS_LAMBDA_FUNCTION_NAME,
      Payload: JSON.stringify({ cpf, password, signup, username, email })
    };

    const token = await lambda.invoke(params).promise();

    return token;
  }
}
