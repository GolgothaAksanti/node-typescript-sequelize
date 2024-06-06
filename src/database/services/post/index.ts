import CreatePostService from './service.post.create';
import FindAllPostByUserService from './service.post.find.all.by.user';
import FindAllPostService from './service.post.get.all';
import GetOnePostService from './service.post.get.one';
import UpdatePostService from './service.post.update';
import DeletePostService from './service.post.delete';

const CreatePost = new CreatePostService();
const FindAllPostByUser = new FindAllPostByUserService();
const FindAllPost = new FindAllPostService();
const GetOnePost = new GetOnePostService();
const UpdatePost = new UpdatePostService();
const DeletePost = new DeletePostService();

const PostServices = {
  CreatePost,
  FindAllPostByUser,
  FindAllPost,
  GetOnePost,
  UpdatePost,
  DeletePost,
};

export default PostServices;
