import { Request, Response } from 'express';
import GetAllContractsService from '../services/GetAllContractsService';
import GraphicContractsService from '../services/GraphicContractsService';

export default class GetAllController {
  public async list(request: Request, response: Response): Promise<Response> {
    const getAllContracts = new GetAllContractsService();

    const allContracts = await getAllContracts.execute();

    return response.json(allContracts);
  }

  public async graphicTotal(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const amountOfContracts = new GraphicContractsService();

    const all = await amountOfContracts.execute();

    return response.json(all);
  }
}
