var models = require('../models');
var bluebird = require('bluebird');
var helpers = require('./http-helpers');
bluebird.promisifyAll(models);


module.exports = {
  messages: {
    get: function (req, res) {
      //gets all the messages
      models.messages.get();

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var user = req.body.username;
      models.users.get(user, function(err, u_id){
        if (err) {
          models.users.post(user);
        }
        var message = {};
        message.u_id = u_id;
        message.text = data.message;
        models.messages.post(message);
      });

          // catch(function (err){
          // console.log(err)
          // //then post to the user and return u_id
          // models.users.post(user);
        // })
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res, cb) {
      models.users.get(user, function(user) {
        helpers.sendResponse(res, user, 200);
      });
    },
    post: function (req, res) {
      // req.on('data', function(data){
      //   var user = data.username;
      //   models.users.post(user);
      // });
      
      var user = req.body.username;
      models.users.post(user)
      // console.log(user);

      // helper functions
      // req.on('end', function() {
      //   helpers.sendResponse(res, null, 201);
      // });
    }
  }
};

