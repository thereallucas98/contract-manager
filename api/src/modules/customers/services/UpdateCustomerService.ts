import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  number: number;
  complement: string;
  neighbor: string;
  city: string;
  state: string;
}

class UpdateCustomerService {
  public async execute({
    id,
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

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.');
    }

    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError('There is already one customer with this email.');
    }

    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.street = street;
    customer.number = number;
    customer.complement = complement;
    customer.neighbor = neighbor;
    customer.city = city;
    customer.state = state;

    await customersRepository.save(customer);

    return customer;
  }
}

export default UpdateCustomerService;
