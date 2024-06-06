import { db } from '@src/database/models';
import BaseService from '@src/database/system/base';

class DeletePostService extends BaseService {
  protected async transaction(postId: string): Promise<number | null> {
    const result = await db.Post.destroy({ where: { postId } });

    if (!result) return null;

    return result;
  }
}

export default DeletePostService;
