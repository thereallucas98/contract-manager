import { EntityRepository, Repository } from 'typeorm';
import Contract from '../entities/Contract';

@EntityRepository(Contract)
class ContractsRepository extends Repository<Contract> {
  public async findByName(name: string): Promise<Contract | undefined> {
    const contract = await this.findOne({
      where: {
        name,
      },
    });

    return contract;
  }

  public async findById(id: string): Promise<Contract | undefined> {
    const contract = await this.findOne({
      where: {
        id,
      },
    });

    return contract;
  }

  public async findByCode(code: string): Promise<Contract | undefined> {
    const contract = await this.findOne({
      where: {
        code,
      },
    });

    return contract;
  }
}

export default ContractsRepository;
