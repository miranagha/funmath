var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var adminSchema = new Schema({

       fullname: {
        type: String,
        required: true
    },
 
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password:{
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    usertypes: {
        type: String,
        required: true
    },
  
    notificationdate: {
        type: Date,
        default:new Date().toISOString()
     
    }







},


{
        timestamps: true
    });

    // adminSchema.plugin(passportLocalMongoose);
    // let Admin = mongoose.model('Admin', adminSchema);

    // module.exports = Admin;
    module.exports = mongoose.model('Admin', adminSchema);
