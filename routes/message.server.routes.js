module.exports = function(app){

 var messages = require('./../controllers/messages.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/messages')
	.get(messages.list)
	.post(users.requiresLogin, messages.create);

  app.route('/messages/all').get(messages.listview);

}
