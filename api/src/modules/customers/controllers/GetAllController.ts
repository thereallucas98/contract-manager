import { Request, Response } from 'express';
import GetAllCustomerService from '../services/GetAllCustomerService';

export default class GetAllController {
  public async list(request: Request, response: Response): Promise<Response> {
    const getAllCustomers = new GetAllCustomerService();

    const allCustomers = await getAllCustomers.execute();

    return response.json(allCustomers);
  }
}
