const mongoose= require('mongoose')
const {Schema}= mongoose

const ContractorsSchema = new Schema({
   email: {type: String, required: true, unique: true},
   companyName: {type: String, required: true, unique: true},
   companyAddress: {type: String, required: true},
   contractoryCategory: {type: String, required: true},
   BEDCRegNo: {type: String, required: true, unique: true},
   NEMSAClass: {type: String, required: true},
   phoneNumber: {type: Number, required: true, unique: true},
   entryDate: {type: String, required: true},

   
},{collection: 'contractors'});

const model = mongoose.model('Contractors', ContractorsSchema);
module.exports = model;

