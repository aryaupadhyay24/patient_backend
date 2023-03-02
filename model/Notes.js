const mongoose = require('mongoose');
const { Schema } = mongoose;


const NotesSchema = new Schema({
    // i will define User table ka user id as foriegn key so that the two table link with object id of user
    // name: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // },
    name:{
        type:String,
        required:true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,     
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('notes', NotesSchema);