import sequelize from "./connection.js";
export async function syncModels() {
    try {
        // Sync all models
        await sequelize.sync({ force: false });
        console.log('All models synced successfully');
    }
    catch (error) {
        console.error('Error syncing models:', error);
        throw error; // Optionally rethrow or handle the error further
    }
}
