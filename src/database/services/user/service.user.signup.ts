import { db } from '@src/database/models';
import User, {
  UserAttributes,
  UserCreationAttributes,
} from '@src/database/models/User';
import BaseService from '@src/database/system/base';

class UserSignupService extends BaseService {
  protected async transaction(data: UserAttributes): Promise<any> {
    const salt = this.Password.salt();
    const password = this.Password.hash(data.password as string, salt);

    const userData: UserCreationAttributes = {
      ...data,
      salt,
      password,
    };

    const user = await db.User.create(userData);

    if (!user) return null;

    return user;
  }
}

export default UserSignupService;
