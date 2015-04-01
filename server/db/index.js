var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('users', {
  name: Sequelize.STRING
});

var Message = sequelize.define('messages', {
  text: Sequelize.STRING,
  // roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
User.sync();
Message.sync();

module.exports.User = User;
module.exports.Message = Message;
