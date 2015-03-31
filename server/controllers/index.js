var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('In controllers.messages.get');
      models.messages.get(function(messages){
        // if (err) throw err;
        console.log('messages: ', messages)
        res.json(messages);
        res.end()
      });
    },
    post: function (req, res) {
      console.log('In controllers.messages.post');
      // roomname
      var message = [ req.body.username, req.body.message ];

      models.messages.post(message, function(err, results){
        if (err) throw err;
        res.json(results);
      });
      res.end()
    }
  },

  users: {
    get: function (req, res) {
      console.log('In controllers.users.get');
      models.users.get(function(err, users) {
        if (err) throw err;
        res.json(users);
      });
      res.end()
    },
    post: function (req, res) {
      console.log('In controllers.users.post');
      var user = [ req.body.username ];
      models.users.post(user, function(err, results){
        if (err) throw err;
        res.json(results);
      });
      res.end()
    }
  }
};

