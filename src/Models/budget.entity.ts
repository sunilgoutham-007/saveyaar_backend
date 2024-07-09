import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database/connection.js'; // Adjust path as per your project structure

interface BudgetAttributes {
  id: number;
  budget_name: number;
  user_id: number;
  currency: number;
  frequency: number;
  categories: number;
  amount: number;
  created_at?: Date;
  updated_at?: Date;
}

export type BudgetCreationAttributes = Optional<BudgetAttributes, 'id' | 'created_at' | 'updated_at'>;

class Budget extends Model<BudgetAttributes, BudgetCreationAttributes> implements BudgetAttributes {
  public id!: number;
  public budget_name!: number;
  public user_id!: number;
  public currency!: number;
  public frequency!: number;
  public categories!: number;
  public amount!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
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
