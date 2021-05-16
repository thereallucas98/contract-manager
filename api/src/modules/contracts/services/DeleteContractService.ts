import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

interface IRequest {
  id: string;
}

class DeleteContractService {
  public async execute({ id }: IRequest): Promise<void> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const contract = await contractsRepository.findById(id);

    if (!contract) {
      throw new AppError('Contract not found');
    }

    await contractsRepository.remove(contract);
  }
}

export default DeleteContractService;
