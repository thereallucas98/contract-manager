import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

class ListCustomerService {
  public async execute({ take, skip }): Promise<Customer[]> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customers = await customersRepository.find({
      take,
      skip: skip - 1,
    });

    return customers;
  }
}

export default ListCustomerService;
