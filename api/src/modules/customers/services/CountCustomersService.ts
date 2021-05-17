import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

export default class CountCustomersService {
  public async execute(): Promise<string> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const total = customersRepository.count();

    return (await total).toString();
  }
}
