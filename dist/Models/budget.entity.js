import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/connection.js'; // Adjust path as per your project structure
class Budget extends Model {
    id;
    budget_name;
    user_id;
    currency;
    frequency;
    categories;
    amount;
    created_at;
    updated_at;
}
Budget.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    budget_name: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currency: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    frequency: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categories: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
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
    modelName: 'Budget',
    tableName: 'budgets',
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
    underscored: true, // Use underscored naming for attributes
});
export default Budget;
