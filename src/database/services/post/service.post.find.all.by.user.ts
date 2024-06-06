import { db } from '@src/database/models';
import Post from '@src/database/models/Post';
import BaseService from '@src/database/system/base';

class FindAllPostByUserService extends BaseService {
  protected async transaction(userId: string): Promise<Post[] | null> {
    const post = await db.Post.findAll({ where: { userId }, raw: true });

    if (!post) return null;

    return post;
  }
}

export default FindAllPostByUserService;
