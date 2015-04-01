var db = require('../db');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({ include: [db.User] })
        .complete(function(err, messages){
          res.json(messages)
        });
        // res.end()
    },
    post: function (req, res) {
      // roomname
      console.log('body:', req.body)
      db.User.findOrCreate({where: { name: req.body.username }})
        .complete(function(err, user){
          var message = {
            text: req.body.message,
            name: req.body.username
          };
          db.Message.create(message)
            .complete(function(err, results){
              res.sendStatus(201);
            });
          res.end();
        });
    }
  },

  users: {
    get: function (req, res) {
      db.User.findAll()
        .complete(function(err, user){
          res.json(user);
        });
      // res.end()
    },
    post: function (req, res) {
      // console.log('body:', req.body)
      db.User.create({ name: req.body.username })
        .complete(function(err, results){
          res.sendStatus(201);
          res.end();
        });
    }
  }
};

