import {
  Model,
  DataTypes,
  Optional,
  CreationOptional,
  ForeignKey,
} from 'sequelize';

import { sequelize } from '../system/db';
import { generateSlug } from '@src/core/utils/generate.slug';

export interface PostAttributes {
  postId?: string;
  title?: string;
  description?: string;
  category?: string;
  image_url?: string;
  image_id?: string;
  userId?: string;
  slug?: string;
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
  declare image_url: CreationOptional<string>;
  declare image_id: CreationOptional<string>;
  declare slug: CreationOptional<string>;
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
      allowNull: true,
    },
    image_id: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    slug: {
      type: new DataTypes.STRING(128),
      allowNull: true,
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
    hooks: {
      beforeCreate(post: Post) {
        if (!post.slug) {
          post.slug = generateSlug(post.title);
        }
      },
    },
  }
);

export default Post;
