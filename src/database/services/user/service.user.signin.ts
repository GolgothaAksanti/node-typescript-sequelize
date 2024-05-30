import { db } from '@src/database/models';
import BaseService from '@src/database/system/base';
import { IUserSignin } from '@src/types/user.type';

class UserSigninService extends BaseService {
  protected async transaction(data: IUserSignin): Promise<any> {
    const user = await db.User.findOne({
      raw: true,
      where: {
        [this.op.or]: [{ username: data.login }, { email: data.login }],
      },
    });

    if (!user) return null;

    const isPassword = this.Password.compare(
      data.password,
      user.password,
      user.salt
    );

    if (!isPassword) return null;

    return user;
  }
}

export default UserSigninService;
