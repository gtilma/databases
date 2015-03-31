var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      //gets all the messages

    }, // a function which handles a get request for all messages
    post: function (req, res) {
    //request on data with callback
    req.on('data', function(data){
      var user = data.username;
      models.users.get(user).then()
    })
    //inside callback we have the message object
    //see users exists, if not 
    //then post to the user and return u_id
    //then post to messages with text and u_id

    

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      req.on('data', function(data){
        var user = data.username;
        models.users.post(user);
      });
      req.on('end', res.end());
    }
  }
};

