import { Request, Response } from 'express';
import GetAllCustomerService from '../services/AllCustomersService';

export default class ExtraCustomersController {
  public async list(request: Request, response: Response): Promise<Response> {
    const getAllCustomers = new GetAllCustomerService();

    const customers = await getAllCustomers.execute();

    return response.json(customers);
  }
}
