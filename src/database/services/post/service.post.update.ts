import { db } from '@src/database/models';
import { PostAttributes } from '@src/database/models/Post';
import BaseService from '@src/database/system/base';

class UpdatePostService extends BaseService {
  protected async transaction(data: {
    post: PostAttributes;
    postId: string;
  }): Promise<number[] | null> {
    const result = await db.Post.update(
      { ...data.post },
      { where: { postId: data.postId } }
    );

    if (!result) return null;

    return result;
  }
}

export default UpdatePostService;
