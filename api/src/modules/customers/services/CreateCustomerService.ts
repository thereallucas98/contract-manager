import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  street: string;
  number: number;
  complement?: string;
  neighbor: string;
  city: string;
  state: string;
}

class CreateCustomerService {
  public async execute({
    name,
    email,
    phone,
    street,
    number,
    complement,
    neighbor,
    city,
    state,
  }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);
    const emailExists = await customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const customer = customersRepository.create({
      name,
      email,
      phone,
      street,
      number,
      complement,
      neighbor,
      city,
      state,
    });

    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
