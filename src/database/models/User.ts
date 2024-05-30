import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../system/db';

export interface UserAttributes {
  userId: string;
  username: string;
  fullname: string;
  email: string;
  password?: string;
  active?: number;
  status?: number;
  is_verified?: number;
  salt?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'userId'> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  declare userId: CreationOptional<string>;
  declare username: string;
  declare fullname: string;
  declare email: string;
  declare password: CreationOptional<string>;
  declare active: CreationOptional<number>;
  declare is_verified: CreationOptional<number>;
  declare status: CreationOptional<number>;
  declare salt: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;

  public toJSON(): Partial<UserAttributes> {
    const values = Object.assign({}, this.get());
    delete values.password;
    delete values.salt;
    return values;
  }
}

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
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.TINYINT(),
      allowNull: false,
      defaultValue: 1,
    },
    status: {
      type: DataTypes.TINYINT(),
      allowNull: false,
      defaultValue: 1,
    },
    is_verified: {
      type: DataTypes.TINYINT(),
      allowNull: false,
      defaultValue: 0,
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
