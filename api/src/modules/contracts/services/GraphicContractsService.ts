import { getCustomRepository, ILike } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

class GraphicContractsService {
  public async execute(): Promise<any> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const total = await contractsRepository.count();

    return total;
  }
}

export default GraphicContractsService;
