import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

export default class CountUsersService {
  public async execute(): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepository);

    const total = usersRepository.count();

    return (await total).toString();
  }
}
