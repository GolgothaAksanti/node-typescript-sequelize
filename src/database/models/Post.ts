import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../system/db';

interface PostAttributes {
  postId: string;
  title: string;
  content: string;
  userId: string;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'postId'> {}

class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  public postId!: string;
  public title!: string;
  public content!: string;
  public userId!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    postId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    content: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'posts',
  }
);

export default Post;
