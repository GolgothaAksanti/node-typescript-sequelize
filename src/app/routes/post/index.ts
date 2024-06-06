import CreatePostRoute from './route.post.create';
import GetAllPostRoute from './route.post.get.all';
import GetOnePostRoute from './route.post.get.one';
import GetAllPostByUserRoute from './route.post.get.all.by.user';
import DeletePostRoute from './route.post.delete';
import UpdatePostRoute from './route.post.update';

const PATH: string = '/post';

const CreatePost = new CreatePostRoute(PATH);
const GetAllPost = new GetAllPostRoute(PATH);
const GetOnePost = new GetOnePostRoute(PATH);
const GetAllPostByUser = new GetAllPostByUserRoute(PATH);
const UpdatePost = new UpdatePostRoute(PATH);
const DeletePost = new DeletePostRoute(PATH);

const PostRoutes = {
  CreatePost,
  GetAllPostByUser,
  GetAllPost,
  GetOnePost,
  DeletePost,
  UpdatePost,
};

export default PostRoutes;
