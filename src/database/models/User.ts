import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../system/db';

interface UserAttributes {
  userId: string;
  username: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'userId'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public userId!: string;
  public username!: string;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// class User extends Model {
//   public userId!: number;
//   public username!: string;
//   public email!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

User.init(
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  { sequelize, tableName: 'users' }
);

export default User;
