import { BadRequestException, Injectable } from '@nestjs/common';
import { Cpf } from 'src/core/domain/cliente/entity/cpf.entity';
import { Cliente } from '../../core/domain/cliente/entity/cliente.entity';
import { RegistrarClienteDto } from '../api/http-rest/dtos/registrarCliente.dto';

@Injectable()
export class ClienteFactory {
  public fabricaCliente({cpf, nome, email}: RegistrarClienteDto) {
    const cpfOnlyNumbers = cpf.replace(/[^\d]/g, '');
    const _cpf = Cpf.validaCpf(cpfOnlyNumbers);
    if(!_cpf) {
      throw new BadRequestException("CPF inválido");
    }
    const cliente = Cliente.criarCliente(cpfOnlyNumbers, nome, email);
    return cliente;
  }
}
