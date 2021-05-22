import Customer from '@modules/customers/typeorm/entities/Customer';
import { getCustomRepository, ILike } from 'typeorm';
import Contract from '../typeorm/entities/Contract';
import ContractsRepository from '../typeorm/repositories/ContractsRepository';

// interface IPaginateContract {
//   from: number;
//   to: number;
//   per_page: number;
//   total: number;
//   current_page: number;
//   prev_page: number | null;
//   next_page: number | null;
//   data: Contract[];
// }

interface IQueries {
  status?: number | undefined;
  viability?: number | undefined;
  page?: number | undefined;
  per_page?: number | undefined;
}

class ListContractService {
  public async execute({
    status,
    viability,
    page,
    per_page,
  }: IQueries): Promise<Contract[] | undefined> {
    const contractsRepository = getCustomRepository(ContractsRepository);

    // const contracts = await contractsRepository
    //   .createQueryBuilder('contracts')
    //   .where('contracts.status like :status', { status: `%${status}%` })
    //   .paginate();

    // return contracts as IPaginateContract;

    const per_page_confirm = per_page ? per_page : 5;
    const page_confirm = page ? page : 1;

    const contracts = await contractsRepository.find({
      take: per_page_confirm,
      skip: per_page_confirm * (page_confirm - 1),
      relations: ['customer'],
      where: {
        viability: viability ? viability : ILike('%'),
        status: status ? status : ILike('%'),
      },
    });

    return contracts;
  }
}

export default ListContractService;
