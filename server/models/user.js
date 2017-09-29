var mongoose = require('mongoose');

// User
// email, - require it  - trim it - type string - minlength = 1
var User = mongoose.model('Users', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

module.exports = { User };