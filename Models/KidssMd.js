var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var kidssMdSchema = new Schema({

    fullname: {
        type: String,
        required: true
    },
 
    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    parentName: {
        type: String,
        required: true
    },
    images: {
        type: String,
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
    module.exports = mongoose.model('kids', kidssMdSchema);
