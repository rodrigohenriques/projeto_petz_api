const R = require('ramda');

const decorator = {

  isSequelizeError: function(objError) {
    return R.hasIn('message', objError) &&
    R.hasIn('name', objError) &&
    objError.name.indexOf('Sequelize') != -1;
  },

  decorateUserErrors: function(objError) {
    if (objError.message.indexOf('isEmail failed') != -1) {
      objError.message = 'E-mail inválido!'
    }

    if (objError.message.indexOf('email_user') != -1) {
      objError.message = 'E-mail já utilizado!'
    }

    return objError;
  }

};

module.exports = decorator;
