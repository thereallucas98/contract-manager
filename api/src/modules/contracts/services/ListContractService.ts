import { getCustomRepository } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

class ListContractService {
  public async execute(): Promise<Contract[]> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const contracts = await contractsRepository.find();

    return contracts;
  }
}

export default ListContractService;
