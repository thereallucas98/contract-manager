import CustomersRepository from '@modules/customers/typeorm/repositories/CustomersRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

interface IRequest {
  customer: string;
  name: string;
  description: string;
  code: string;
  viability: number;
  status: number;
  start_date: string;
  expected_finished_date: string;
  finished_date: string;
}

class CreateContractService {
  public async execute({
    customer,
    name,
    description,
    code,
    viability,
    status,
    start_date,
    expected_finished_date,
    finished_date,
  }: IRequest): Promise<Contract> {
    const contractsRepository = getCustomRepository(ContractsRepository);
    const customersRepository = getCustomRepository(CustomersRepository);
    const nameExists = await contractsRepository.findByName(name);

    if (nameExists) {
      throw new AppError('Name already in use.');
    }
    const owner = await customersRepository.findById(customer);

    const contract = contractsRepository.create({
      customer: owner,
      name,
      description,
      code,
      viability,
      status,
      start_date,
      expected_finished_date,
      finished_date,
    });

    await contractsRepository.save(contract);

    return contract;
  }
}

export default CreateContractService;
