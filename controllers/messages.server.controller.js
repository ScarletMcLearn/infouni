var mongoose = require('mongoose');
var Message = require('./../models/Message.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');




module.exports.listview=function(req,res)
{
  Message.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.render('./../public/views/user/message.ejs',{
    user:req.user || null,
    messages: data
  });
    }
  });
  
};

module.exports.list = function(req, res) {
  Message.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");
      
      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var message = new Message(req.body);
  message.user = req.user;
  message.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.message);
};


exports.delete = function(req, res) {
	var message = req.message;
	message.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(message);
		}
	});
};


module.exports.update = function(req, res) {
  var message = req.message;

  	message = _.extend(message, req.body);

  	message.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(message);
  		}
  	});
};

exports.messageByID = function(req, res, next, id) {
	Message.findById(id).populate('user', 'email').exec(function(err, message) {
		if (err) return next(err);
		if (!message) return next(new Error('Failed to load message ' + id));
		req.message = message;
		next();
	});
};

