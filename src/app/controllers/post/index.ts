import CreatePostController from './controller.post.create';
import GetAllPostController from './controller.post.get.all';
import GetPostController from './controller.post.get.one';
import GetAllPostByUserController from './controller.post.get.all.by.user';
import UpdatePostController from './controller.post.update';
import DeletePostController from './controller.post.delete';

const CreatePost = new CreatePostController();
const GetAllPost = new GetAllPostController();
const GetPost = new GetPostController();
const GetAllPostByUser = new GetAllPostByUserController();
const UpdatePost = new UpdatePostController();
const DeletePost = new DeletePostController();

const PostControllers = {
  CreatePost,
  GetAllPost,
  GetPost,
  GetAllPostByUser,
  UpdatePost,
  DeletePost,
};

export default PostControllers;
