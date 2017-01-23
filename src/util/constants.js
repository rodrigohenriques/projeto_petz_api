const constants = {

    db: {
        host: 'localhost',
        username: process.env.PETS_DB_USER || 'postgres',
        password: process.env.PETS_DB_PASSWORD || 'postgres',
        database: process.env.PETS_DB || 'pets',
        port: 5432
    },

    app: {
        name: 'Pets'
    },

    header: {
        json: 'application/json;charset=UTF-8;'
    },

    server: {
        port: 4600
    }

};
module.exports = constants;