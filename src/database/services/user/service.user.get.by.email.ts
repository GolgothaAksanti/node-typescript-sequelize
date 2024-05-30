import { db } from '@src/database/models';
import BaseService from '@src/database/system/base';

class GetUserByEmailService extends BaseService {
  protected async transaction(email: string): Promise<any> {
    const user = await db.User.findOne({
      where: { email },
      raw: true,
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByEmailService;
