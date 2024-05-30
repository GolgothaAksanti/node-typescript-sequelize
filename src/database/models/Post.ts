import {
  Model,
  DataTypes,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import { sequelize } from '../system/db';

export interface PostAttributes {
  postId: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  image_id: string;
  userId: string;
  slug: string;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PostCreationAttributes
  extends Optional<PostAttributes, 'postId'> {}

class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  declare postId: CreationOptional<string>;
  declare userId: ForeignKey<string>;
  declare title: string;
  declare description: string;
  declare category: string;
  declare image_url: string;
  declare image_id: string;
  declare slug: string;
  declare status: CreationOptional<number>;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Post.init(
  {
    postId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'userId',
      },
      onDelete: 'CASCADE',
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
    category: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    image_url: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    image_id: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    slug: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT(),
      allowNull: false,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'posts',
  }
);

export default Post;
