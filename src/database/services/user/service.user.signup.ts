import BaseService from '@src/database/system/base';

class UserSignupService extends BaseService {
  protected async transaction<T>(data?: T | undefined): Promise<any> {}
}

export default UserSignupService