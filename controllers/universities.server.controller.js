var mongoose = require('mongoose');
var University = require('./../models/University.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');



module.exports.listview=function(req,res)
{
  University.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.render('./../public/views/unilist.ejs',{
    user:req.user || null,
    universities: data
  });
    }
  });
  
};

module.exports.list = function(req, res) {
  University.find(function(err, data) {
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
  var university = new University(req.body);
  university.user = req.user;
  university.save(function(err, data) {
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
  res.json(req.university);
};


exports.delete = function(req, res) {
	var university = req.university;
	university.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(university);
		}
	});
};


module.exports.update = function(req, res) {
  var university = req.university;

  	university = _.extend(university, req.body);

  	university.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(university);
  		}
  	});
};

exports.uniView = function(req, res) {
	res.render('./../public/views/user/university.ejs', {
		user: req.user || null,
		request: req
	});
};

