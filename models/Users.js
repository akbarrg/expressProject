var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var UsersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    city: String,
});

autoIncrement.initialize(mongoose.connection);
UsersSchema.plugin(autoIncrement.plugin, 'Users');
module.exports = mongoose.model('Users', UsersSchema);
