var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      var queryString = "SELECT * FROM messages";
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results) {

      });

      db.end();
    }, // a function which produces all the messages
    post: function (message) {
      
      db.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (user) {
      var queryString = "SELECT * FROM users WHERE name = " + user;
      // db.query(....)
      db.end();
    },
    post: function (user) {
      var queryString = "INSERT into users(name) VALUES("+ user +")";
      db.query(queryString, function(err, results) {
        if(err) {throw err}
        console.log(results)
      })
      db.end();
    }
  }
};

