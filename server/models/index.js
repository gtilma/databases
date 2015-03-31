var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      var queryString = "SELECT messages.id, users.name, messages.text FROM messages \
                         left outer JOIN users \
                         ON (messages.user_id = users.id) \
                         order by messages.id desc";

      db.query(queryString, function(err, results) {
        cb(results);
      });
    },
    post: function (message, cb) {
      var queryString = "INSERT INTO messages (user_id, text) \
                         VALUES ((SELECT id FROM users WHERE name = ? LIMIT 1), ?)";

      db.query(queryString, message, function(err, results) {
        if (err) throw err;
        cb(results);  
      });
    }
  },

  users: {
    get: function (cb) {
      var queryString = "SELECT * FROM users";
      db.query(queryString, function(err, results) {
        cb(results);
      });
    },
    post: function (user, cb) {
      console.log('In models.users.post');
      var queryString = "INSERT INTO users (name) VALUES (?)";
      db.query(queryString, user, function(err, results) {
        cb(results);
      });
    }
  }
};

