import { getCustomRepository, ILike } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

interface IPaginateContract {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Contract[];
}

class ListContractService {
  public async execute(): Promise<IPaginateContract> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const contracts = await contractsRepository
      .createQueryBuilder('contracts')
      .paginate();

    return contracts as IPaginateContract;
  }
}

export default ListContractService;
