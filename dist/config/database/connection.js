import { Sequelize } from 'sequelize';
const config = {
    "username": "sunil",
    "password": 'password',
    "database": "postgres",
    "dialect": "postgres",
    "host": "127.0.0.1",
    "port": "5432",
};
const { database, username, password, dialect, host } = config;
const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: dialect,
    logging: false,
    pool: {
        max: 1,
        min: 0,
        acquire: 100000,
        idle: 100000,
    },
});
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
export default sequelize;
