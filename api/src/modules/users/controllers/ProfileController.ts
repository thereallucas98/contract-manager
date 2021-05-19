import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfile = new ShowProfileService();
    const { id } = request.params;
    // console.log(request.user.id);

    const users = await showProfile.execute({ id });

    return response.json(users);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, type, password, old_password } = request.body;
    const { id } = request.params;

    const updateProfile = new UpdateProfileService();

    const user = await updateProfile.execute({
      user_id: id,
      name,
      email,
      type,
      password,
      old_password,
    });

    return response.json(user);
  }
}
