module.exports = function(app){

 var universities = require('./../controllers/universities.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/universities')
	.get(universities.list)
	.post(users.requiresLogin, universities.create);



app.route('/unilist').get(universities.listview);
app.route('/university').get(universities.uniView);




}
