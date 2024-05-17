import { Op, Sequelize, QueryTypes } from 'sequelize';
import { db } from '@src/database/models';
import Util from '@src/core/utils';
import { IPage, IPagination } from '@src/types/db';

const { Password } = Util;

abstract class BaseService {
  protected database: any;

  protected op: typeof Op;
  protected sequelize: typeof Sequelize;
  protected queryTypes: typeof QueryTypes;
  protected PAGE_SIZE = 10;
  protected Password = Password;

  constructor() {
    this.op = Op;
    this.sequelize = Sequelize;
    this.database = db;
    this.queryTypes = QueryTypes;
  }

  protected abstract transaction<T>(data?: T): Promise<void | any>;

  public async call<T>(data?: T): Promise<void | any> {
    try {
      return await this.transaction(data);
    } catch (err: unknown) {
      console.log(err);
      return null;
    }
  }

  protected cursor(data: IPage): IPagination {
    const limit: number = data.pageSize || 1;
    const offset: number = (data.page - 1) * data.pageSize || 0;
    return { offset, limit };
  }
}

export default BaseService;
