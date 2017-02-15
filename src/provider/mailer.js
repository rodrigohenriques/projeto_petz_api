// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
const path = require('path');
const constants = require(path.resolve('src/util/constants'));
const sendgrid = require('sendgrid').SendGrid(constants.sendGrid.transactional.token);

let helper = require('sendgrid').mail;

const mailerProvider = {
  activeUser: function(userObj) {

    let mail = {};

    let requestBody = mail;
    let request = sendgrid.emptyRequest();

    mail.content = [ {type: 'text/html', value: ' '} ];
    mail.from = new helper.Email('resende.89@hotmail.com');
    mail.template_id = constants.sendGrid.transactional.templateActiveUser;
    mail.personalizations = [

		{
  substitutions: { '%link%': 'http://diegoramos.me/' },
  to: [ new helper.Email(userObj.email) ]
		}

	];

    request.method = 'POST';
    request.path = '/v3/mail/send';
    request.body = requestBody;
    sendgrid.API(request, function(response) {

      if (response.errors && response.errors.length > 0) {
        console.log(JSON.stringify(response));
      } else {
        console.log(JSON.stringify(response));
      }

    });

  }

};

module.exports = mailerProvider;