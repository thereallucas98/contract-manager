import { Request, Response } from 'express';
import GetAllContractsService from '../services/GetAllContractsService';

export default class GetAllController {
  public async list(request: Request, response: Response): Promise<Response> {
    const getAllContracts = new GetAllContractsService();

    const allContracts = await getAllContracts.execute();

    return response.json(allContracts);
  }
}
