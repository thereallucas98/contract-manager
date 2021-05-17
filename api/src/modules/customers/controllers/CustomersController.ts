import { Request, Response } from 'express';
import CountCustomersService from '../services/CountCustomersService';
import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCustomers = new ListCustomerService();
    const countCustomers = new CountCustomersService();
    const { take = 10, skip = 1 } = request.query;

    const customers = await listCustomers.execute({
      take,
      skip,
    });

    const total = await countCustomers.execute();

    return response.json({
      customers,
      total,
    });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomer = new ShowCustomerService();

    const customer = await showCustomer.execute({ id });

    return response.json(customer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      phone,
      street,
      number,
      complement,
      neighbor,
      city,
      state,
    } = request.body;

    const createCustomer = new CreateCustomerService();

    const customer = await createCustomer.execute({
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

    return response.json(customer);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      phone,
      street,
      number,
      complement,
      neighbor,
      city,
      state,
    } = request.body;
    const { id } = request.params;

    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
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
    });

    return response.json(customer);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomer = new DeleteCustomerService();

    await deleteCustomer.execute({ id });

    return response.json([]);
  }
}
