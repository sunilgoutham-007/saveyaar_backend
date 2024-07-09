import sequelize from "./connection.js";
// import SubscriptionPlatform from "../../Models/subscriptionPlatform.entity.js";
import {Coupon} from "../../Models/coupons.entity.js";
import {Advertisement} from "../../Models/advertisement.entity.js";
export async function syncModels() {
    try {
        // Sync all models
        await sequelize.sync({ force: false });
        console.log('All models synced successfully');
    } catch (error) {
        console.error('Error syncing models:', error);
        throw error; // Optionally rethrow or handle the error further
    }
}