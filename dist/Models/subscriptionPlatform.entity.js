import { DataTypes, Model } from 'sequelize';
// @ts-ignore
import sequelize from '../config/database/connection.js';
class SubscriptionPlatform extends Model {
    id;
    description;
    platform_name;
    website_url;
    cancel_url;
    renewal_url;
    created_by;
    updated_by;
    logo;
    category_id;
    visibility;
    created_at;
    // Timestamps
    createdAt;
    updatedAt;
}
SubscriptionPlatform.init({
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
}, {
    sequelize,
    tableName: 'SubscriptionPlatforms',
    modelName: 'SubscriptionPlatform',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
});
export default SubscriptionPlatform;
