import { db } from '@src/database/models';
import Post, { PostAttributes } from '@src/database/models/Post';
import BaseService from '@src/database/system/base';

class CreatePostService extends BaseService {
  protected async transaction(data: PostAttributes): Promise<Post | null> {
    const post = await db.Post.create(data);

    if (!post) return null;

    return post;
  }
}

export default CreatePostService;
