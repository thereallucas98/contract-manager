import { getCustomRepository, ILike } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

class ListContractService {
  public async execute({ take, skip, status, viability }): Promise<Contract[]> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const contracts = await contractsRepository.find({
      take,
      skip: skip - 1,
      relations: ['customer'],
      where: {
        viability: viability ? viability : ILike('%'),
        status: status ? status : ILike('%'),
      },
    });

    return contracts;
  }
}

export default ListContractService;
