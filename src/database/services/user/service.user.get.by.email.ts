import { db } from '@src/database/models';
import User from '@src/database/models/User';
import BaseService from '@src/database/system/base';

class GetUserByEmailService extends BaseService {
  protected async transaction(email: string): Promise<User | null> {
    const user = await db.User.findOne({
      where: { email },
      raw: true,
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByEmailService;
