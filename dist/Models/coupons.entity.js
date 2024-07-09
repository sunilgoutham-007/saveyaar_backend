import { DataTypes, Model } from 'sequelize';
// @ts-ignore
import sequelize from '../config/database/connection.js';
export class Coupon extends Model {
    id;
    code;
    type;
    discount;
    brandId;
    couponPrice;
    validFrom;
    validUntil;
    maxUses;
    status;
    created_at;
    updated_at;
}
Coupon.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('Percentage', 'Fixed Amount'),
        allowNull: false,
    },
    discount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    couponPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    validFrom: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    validUntil: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    maxUses: {
        type: DataTypes.INTEGER,
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
    tableName: 'coupons',
    modelName: 'coupon',
    timestamps: true, // Enable timestamps (createdAt)
    underscored: true, // Use underscored naming for attributes
});
// Synchronize the model with the database
// Coupon.sync({ force: false }) // set force to true if you want to drop table before creating
//     .then(() => {
//         console.log('Coupon model synced with database');
//     })
//     .catch(err => {
//         console.error('Unable to sync Coupon model:', err);
//     });
export default Coupon;
