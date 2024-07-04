import { DataTypes, Model } from 'sequelize';
// @ts-ignore
import sequelize from '../config/database/connection.js';
export class Advertisement extends Model {
    id;
    title;
    startDate;
    endDate;
    bannerImage;
    description;
    isActive;
    targetWebsite;
    status;
    created_at;
    updated_at;
}
Advertisement.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    bannerImage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true, // Assuming default value for isActive is true
    },
    targetWebsite: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
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
    tableName: 'advertisements',
    modelName: 'advertisement',
    timestamps: true, // Enable timestamps (createdAt)
    underscored: true, // Use underscored naming for attributes
});
// Synchronize the model with the database
// Advertisement.sync({ force: false }) // set force to true if you want to drop table before creating
//     .then(() => {
//         console.log('Advertisement model synced with database');
//     })
//     .catch(err => {
//         console.error('Unable to sync Advertisement model:', err);
//     });
export default Advertisement;
