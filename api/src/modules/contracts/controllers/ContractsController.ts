import { Request, Response } from 'express';
import CountContractsService from '../services/CountContractsService';
import CreateContractService from '../services/CreateContractService';
import DeleteContractService from '../services/DeleteContractService';
import ListContractService from '../services/ListContractService';
import ShowContractService from '../services/ShowContractService';
import UpdateContractService from '../services/UpdateContractService';

export default class ContractsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listContracts = new ListContractService();
    const countContracts = new CountContractsService();
    const { take = 10, skip = 1, status, viability } = request.query;
    const contracts = await listContracts.execute({
      take,
      skip,
      status,
      viability,
    });

    const total = await countContracts.execute();

    return response.json({ contracts, total });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showContract = new ShowContractService();

    const contract = await showContract.execute({ id });

    return response.json(contract);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      owner,
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
      name,
      description,
      code,
      viability,
      status,
      start_date,
      expected_finished_date,
      finished_date,
      owner,
    });

    return response.json(contract);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteContract = new DeleteContractService();

    await deleteContract.execute({ id });

    return response.json([]);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description, viability, status, finished_date } =
      request.body;

    const { id } = request.params;

    const updateContract = new UpdateContractService();

    const contract = await updateContract.execute({
      id,
      name,
      description,
      viability,
      status,
      finished_date,
    });

    return response.json(contract);
  }
}
