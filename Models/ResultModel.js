var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var resusltMdSchema = new Schema({

    totalQuestionAttempt: {
        type: Number,
        required: true
    },
 
    totalright: {
        type: Number,
        required: true
    },

    status: {
        type: String,
    },

    level: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }




},


{
        timestamps: true
    });



    // module.exports = Admin;
    module.exports = mongoose.model('Result', resusltMdSchema);
