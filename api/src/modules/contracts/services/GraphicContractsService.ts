import { getCustomRepository } from 'typeorm';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

class GraphicContractsService {
  public async execute(): Promise<any[number]> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const total = await contractsRepository.count();

    // console.log('total' + total);

    return total;
  }
}

export default GraphicContractsService;
