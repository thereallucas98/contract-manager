import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();
    const { id } = request.params;

    const user = updateAvatar.execute({
      user_id: id,
      avatarFilename: request.file.filename,
    });

    return response.json(user);
  }
}
