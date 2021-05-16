import { Request, Response } from 'express';
import CreateContractService from '../services/CreateContractService';
import DeleteContractService from '../services/DeleteContractService';
import ListContractService from '../services/ListContractService';
import ShowContractService from '../services/ShowContractService';

export default class ContractsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listContracts = new ListContractService();

    const contracts = await listContracts.execute();

    return response.json(contracts);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showContract = new ShowContractService();

    const contract = await showContract.execute({ id });

    return response.json(contract);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      customer,
      name,
      description,
      code,
      viability,
      status,
      start_date,
      expected_finished_date,
      finished_date,
    } = request.body;

    const createContract = new CreateContractService();

    const contract = await createContract.execute({
      customer,
      name,
      description,
      code,
      viability,
      status,
      start_date,
      expected_finished_date,
      finished_date,
    });

    return response.json(contract);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteContract = new DeleteContractService();

    await deleteContract.execute({ id });

    return response.json([]);
  }
}
