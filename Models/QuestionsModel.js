var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var questionMdSchema = new Schema({

    questions: {
        type: String,
        required: true
    },
 
    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    level: {
        type: String,
        required: true
    },

    options:[],

    correctANswer:{
        type:String,
        
    }
  
  





},


{
        timestamps: true
    });



    // module.exports = Admin;
    module.exports = mongoose.model('Questions', questionMdSchema);
