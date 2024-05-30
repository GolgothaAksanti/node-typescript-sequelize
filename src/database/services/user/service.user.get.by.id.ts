import { db } from '@src/database/models';
import BaseService from '@src/database/system/base';

class GetUserByIdService extends BaseService {
  protected async transaction(userId: string): Promise<any> {
    const user = await db.User.findOne({
      where: { userId },
      raw: true,
    });

    if (!user) return null;

    return user;
  }
}

export default GetUserByIdService;
