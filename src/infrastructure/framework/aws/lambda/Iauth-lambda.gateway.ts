export interface IAuthLambdaGateway {
  authorization(cpf: string, password: string, signup: boolean, username: string | null, email: string | null): Promise<any>;
}

export const IAuthLambdaGateway = Symbol('IAuthLambdaGateway');
