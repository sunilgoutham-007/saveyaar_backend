import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database/connection.js'

interface UserAttributes {
  id: number;
  username: string;
  profile_url: string | null;
  email: string;
  role: 'SaveyaarUser' | 'User';
  mobilenumber: string;
  saveyaar_plan_id: number | null;
  saveyaar_plan_expiry_date: Date | null;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id' | 'created_at' | 'updated_at'>;

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public profile_url!: string | null;
  public email!: string;
  public role!: 'SaveyaarUser' | 'User';
  public mobilenumber!: string;
  public saveyaar_plan_id!: number | null;
  public saveyaar_plan_expiry_date!: Date | null;
  public password!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('SaveyaarUser' , 'User'),
    allowNull: false,
  },
  mobilenumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saveyaar_plan_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  saveyaar_plan_expiry_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true, 
  underscored: true,
});

export default User;
