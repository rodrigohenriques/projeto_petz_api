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
  },

  sendGrid: {
    transactional: {
      token: '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',
      templateActiveUser: '766c5f55-b70e-4214-afc4-4c763a41a8ea'
    }
  }

};
module.exports = constants;