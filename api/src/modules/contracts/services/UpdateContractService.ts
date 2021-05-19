import CustomersRepository from '@modules/customers/typeorm/repositories/CustomersRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

interface IRequest {
  id: string;
  name: string;
  description: string;
  viability: number;
  status: number;
  finished_date: Date;
}

class UpdateContractService {
  public async execute({
    id,
    name,
    description,
    viability,
    status,
    finished_date,
  }: IRequest): Promise<Contract> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const contract = await contractsRepository.findById(id);

    if (!contract) {
      throw new AppError('Contract not found.');
    }

    const nameExists = await contractsRepository.findByName(name);

    if (nameExists) {
      throw new AppError('Name already in use.');
    }

    contract.name = name;
    contract.description = description;
    contract.viability = viability;
    contract.status = status;
    contract.finished_date = finished_date;

    await contractsRepository.save(contract);

    return contract;
  }
}

export default UpdateContractService;
