const mongoose= require('mongoose')
const {Schema}= mongoose

const UserSchema = new Schema({
   email: {type: String, required: true, unique: true},
   password:  String,
   name: { type: String, required: true}

   
},{collection: 'users'});

const model = mongoose.model('User', UserSchema);
module.exports = model;

