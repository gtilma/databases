var db = require('../db');




module.exports = {
  messages: {
    get: function (cb) {
      var queryString = "SELECT * FROM messages";
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results) {
        if(err) console.log(err);
        console.log(results);
        if (cb) cb(results);
      });

      db.end();
    },
    post: function (message, cb) {
      var u_id = message.u_id;
      var text = message.text;

      var queryString = "INSERT into messages (user_id, text) VALUES (?,?)"
      var queryArgs = [u_id, text];
      db.query(queryString, queryArgs, function(err, results) {
        if(err) console.log(err);
        if (cb) cb(results);
      });

      db.end();
    }
  },

  users: {
    get: function (user, cb) {
      var queryString = "SELECT id FROM users WHERE name = ?";
      var queryArgs = [user];
      db.query(queryString, queryArgs, function(err, results) {
        if(err) {throw err}
          console.log(results)
          cb(results);
      });

      db.end();
    },
    post: function (user, cb) {
      var queryString = "INSERT into users (name) VALUES (?)";
      var queryArgs = [user];
      db.query(queryString, queryArgs, function(err, results) {
        if (err) console.log(err);
        if (cb) cb(results);
      });

      db.end();
    }
  }
};

