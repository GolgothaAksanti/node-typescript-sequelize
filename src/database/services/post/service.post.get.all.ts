import { db } from '@src/database/models';
import Post, { PostAttributes } from '@src/database/models/Post';
import BaseService from '@src/database/system/base';

class FindAllPostService extends BaseService {
  protected async transaction(data: PostAttributes): Promise<Post[] | null> {
    const post = await db.Post.findAll();

    if (!post) return null;

    return post;
  }
}

export default FindAllPostService;
