import User from './User';
import Post from './Post';

User.hasMany(Post, {
  sourceKey: 'userId',
  foreignKey: 'userId',
  as: 'posts',
});

Post.belongsTo(User, {
  targetKey: 'userId',
  foreignKey: 'userId',
  as: 'user',
});

export const db = { User, Post };
