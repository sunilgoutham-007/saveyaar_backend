import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/connection.js';
class User extends Model {
    id;
    username;
    profile_url;
    email;
    role;
    mobilenumber;
    saveyaar_plan_id;
    saveyaar_plan_expiry_date;
    password;
    created_at;
    updated_at;
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
        type: DataTypes.ENUM('SaveyaarUser', 'User'),
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
