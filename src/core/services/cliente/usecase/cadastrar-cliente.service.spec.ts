import { BadRequestException } from '@nestjs/common';
import { ClienteMockRepository } from '../../../../../src/infrastructure/persistence/prisma/repository/cliente/cliente-mock.repository';
import { CadastrarClienteService } from './cadastrar-cliente.service';

describe('Cadastra cliente service', () => {
  let clienteRepository: ClienteMockRepository;
  let cadastraClienteService: CadastrarClienteService;

  beforeEach(() => {
    clienteRepository = new ClienteMockRepository();
    cadastraClienteService = new CadastrarClienteService(clienteRepository);
  });

  describe('Cadastra cliente', () => {
    it('Deve ser possível cadastrar um novo cliente', async () => {
      const newClient = {
        cpf: '933.491.440-80',
        nome: 'ale teste',
        email: 'aleteste@teste.com',
      };

      const cliente = await cadastraClienteService.execute(newClient);

      expect(cliente).toEqual(newClient);
    });

    it('Não deve ser possível cadastrar um cliente existente', async () => {
      const newClient = {
        cpf: '933.491.440-80',
        nome: 'ale teste',
        email: 'aleteste@teste.com',
      };

      await cadastraClienteService.execute(newClient);

      await expect(cadastraClienteService.execute(newClient)).rejects.toEqual(
        new BadRequestException('Cliente já existe'),
      );
    });
  });
});
