import { DataTypes, Model, Optional } from 'sequelize'
// @ts-ignore
import sequelize from '../config/database/connection.js'

interface ICoupon {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CouponCreationAttributes = Optional<ICoupon, 'id'>

export class Coupon extends Model {
    public id!: number;
    public code!: string;
    public type!: 'Percentage' | 'Fixed Amount';
    public discount!: number;
    public brandId!: number;
    public couponPrice!: number;
    public validFrom!: Date;
    public validUntil!: Date;
    public maxUses!: number;
    public status!: string;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;}

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