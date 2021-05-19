import { getCustomRepository } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

export default class CountContractsService {
  public async execute(): Promise<string> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    const total = contractsRepository.count();

    return (await total).toString();
  }
}
