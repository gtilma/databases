var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      console.log('In models.messages.get');
      var queryString = "SELECT messages.id, users.name, messages.text FROM messages \
                         left outer JOIN users \
                         ON (messages.user_id = users.id) \
                         order by messages.id desc";

      db.query(queryString, function(err, results) {
        if (err) throw err;
        if (cb) cb(results);
        // db.end();
      });
    },
    post: function (message, cb) {
      console.log('In models.messages.post');

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
      console.log('In models.users.get');
      var queryString = "SELECT * FROM users";
      db.query(queryString, function(err, results) {
        // if (err) throw err;
        cb(results);
        // db.end();
      });
    },
    post: function (user, cb) {
      console.log('In models.users.post');
      var queryString = "INSERT INTO users (name) VALUES (?)";
      db.query(queryString, user, function(err, results) {
        // if (err) console.log(err);
       cb(results);
        // db.end();
      });
    }
  }
};

