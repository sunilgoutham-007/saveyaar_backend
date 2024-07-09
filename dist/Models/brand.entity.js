import { DataTypes, Model } from 'sequelize';
// @ts-ignore
import sequelize from '../config/database/connection.js';
export class Brand extends Model {
    id;
    brand_name;
    logo;
    website;
    status;
    created_at;
    updated_at;
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
