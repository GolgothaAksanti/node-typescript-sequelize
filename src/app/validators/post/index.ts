import CreatePostValidator from './validator.post.create';
import PostIdValidator from './validator.post.id';
import UpdatePostValidator from './validator.post.update';

const CreatePost = new CreatePostValidator();
const PostId = new PostIdValidator();
const UpdatePost = new UpdatePostValidator();

const PostValidators = { CreatePost, PostId, UpdatePost };

export default PostValidators;
