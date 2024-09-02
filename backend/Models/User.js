const monngoose = require('mongoose');
const Schema = monngoose.Schema;



const userSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});


const UserModel = monngoose.model('User',userSchema);
module.exports = UserModel;