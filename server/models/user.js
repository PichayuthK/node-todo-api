const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,//(value) => {
            //  return validator.isEmail(value);
            //},
            message: '{VALUE} is not a valud email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]

});

UserSchema.methods.toJSON = function() {
     var user = this;
     var userObject = user.toObject();

     return _.pick(userObject, ['email','_id']);

};

UserSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({
        access,
        token
    });

    return user.save().then(() => {
        return token;
    });
};

// User
// email, - require it  - trim it - type string - minlength = 1
var User = mongoose.model('Users', UserSchema);

module.exports = { User };