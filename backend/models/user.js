/**
 * File: backend/models/user.js
 * Defined: UserSchema
 * Description: creates the model for submitting a user's username and password to the remote db
 * Dependencies: Mongoose
 *
 * @package hello
 */

/* Basic Setup */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;


/* Creating User Schema */
var UserSchema  = new Schema({
    username: String,
    password: String
});


/* Export Model */
module.exports  = mongoose.model('User', UserSchema);
