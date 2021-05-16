import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

interface IRequest {
  id: string;
}

class ShowContractService {
  public async execute({ id }: IRequest): Promise<Contract> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const contract = await contractsRepository.findById(id);

    if (!contract) {
      throw new AppError('Contract not found.');
    }

    return contract;
  }
}

export default ShowContractService;
