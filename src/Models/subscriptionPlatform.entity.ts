import { DataTypes, Model, Optional } from 'sequelize'
// @ts-ignore
import sequelize from '../config/database/connection.js'

interface ISubscriptionPlatform {
  id: number;
  description: string | null;
  platform_name: string;
  website_url: string | null;
  cancel_url: string | null;
  renewal_url: string | null;
  created_by: number | null;
  updated_by: number | null;
  logo: string | null;
  category_id: number | null;
  visibility: 'public' | 'private';
  created_at: Date;
}

export type SubscriptionPlatformCreationAttributes = Optional<ISubscriptionPlatform, 'id'>

class SubscriptionPlatform extends Model {
  public id!: number;
  public description!: string | null;
  public platform_name!: string;
  public website_url!: string | null;
  public cancel_url!: string | null;
  public renewal_url!: string | null;
  public created_by!: number | null;
  public updated_by!: number | null;
  public logo!: string | null;
  public category_id!: number | null;
  public visibility!: 'public' | 'private';
  public created_at!: Date;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SubscriptionPlatform.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    platform_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cancel_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    renewal_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    visibility: {
      type: DataTypes.ENUM('public', 'private'),
      allowNull: false,
      defaultValue: 'public',
    },
  },
  {
    sequelize,
    tableName: 'SubscriptionPlatforms', 
    modelName: 'SubscriptionPlatform',
    timestamps: true, 
    updatedAt: 'updated_at', 
    createdAt: 'created_at', 
  }
);


export default SubscriptionPlatform;