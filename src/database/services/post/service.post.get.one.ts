import { db } from '@src/database/models';
import Post from '@src/database/models/Post';
import BaseService from '@src/database/system/base';

class GetOnePostService extends BaseService {
  protected async transaction(postId: string): Promise<Post | null> {
    const post = await db.Post.findByPk(postId);

    if (!post) return null;

    return post;
  }
}

export default GetOnePostService;
