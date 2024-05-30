import { db } from '@src/database/models';
import BaseService from '@src/database/system/base';

class GetUserByUsernameService extends BaseService {
  protected async transaction(username: string): Promise<any> {
    const user = await db.User.findOne({
      where: { username },
      raw: true,
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByUsernameService;
