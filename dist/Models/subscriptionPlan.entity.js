// subscriptionPlan.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/connection.js'; // Adjust path as per your project structure
class SubscriptionPlan extends Model {
    id;
    name;
    platformId;
    price;
    // Timestamps
    createdAt;
    updatedAt;
}
SubscriptionPlan.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    platformId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'SubscriptionPlatform',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'subscription_plans',
    modelName: 'SubscriptionPlan',
    timestamps: true,
});
export default SubscriptionPlan;
