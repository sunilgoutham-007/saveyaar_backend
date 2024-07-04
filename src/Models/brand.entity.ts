import { DataTypes, Model, Optional } from 'sequelize'
// @ts-ignore
import sequelize from '../config/database/connection.js'

interface IBrand {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BrandCreationAttributes = Optional<IBrand, 'id'>

export class Brand extends Model {
    public id!: number;
    public brand_name!: string;
    public logo!: string;
    public website!: string;
    public status!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;

}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    brand_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    logo: {
        type: DataTypes.ENUM('Percentage', 'Fixed Amount'),
        allowNull: false,
    },
    website: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Active', 'Inactive'),
        allowNull: false,
        defaultValue: 'Active'
    },
  
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_by_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    tableName: 'brands',
    modelName: 'brands',
    timestamps: true, // Enable timestamps (createdAt)
    underscored: true, // Use underscored naming for attributes
});


export default Brand;