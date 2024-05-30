import User from './User';
import Post from './Post';

User.hasMany(Post, {
  sourceKey: 'userId',
  foreignKey: 'userId',
  as: 'posts',
  onDelete: 'CASCADE',
});

Post.belongsTo(User, {
  targetKey: 'userId',
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'CASCADE',
});

export const db = { User, Post };
