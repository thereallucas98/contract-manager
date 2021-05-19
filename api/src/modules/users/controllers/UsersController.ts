import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import CountUsersService from '../services/CountUsersService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();
    const countUsers = new CountUsersService();
    const { take = 10, skip = 1 } = request.query;

    const users = await listUser.execute({
      take,
      skip,
    });

    const total = await countUsers.execute();

    response.header('x-total-count', total);

    return response.json({
      users,
      total,
    });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      type: 0,
    });

    return response.json(user);
  }
}
