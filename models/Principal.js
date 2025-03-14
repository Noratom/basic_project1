const mongoose= require('mongoose')
const {Schema}= mongoose

const PrincipalSchema = new Schema({
   contractorsName: {type: String, required: true},
   contractorEmail: {type: String, required: true},
   ContractorAddress: {type: String, required: true},
   PhoneNo:{type: Number, required: true},
   BEDCRegNo: {type: String, required: true},
   PPersonFName1: {type: String, required: true, unique: true},
   PPersonLName1: {type: String, required: true, unique: true},
   PPersonMName1: {type: String, required: true},
   PPersonPosition1:{type: String, required: true},
   PPersonPhoneNo1: {type: Number, required: true},
   PPersonSampleSignature1: {type: String, required: true},
   EntryDate: {type: String, required: true},
   PPersonFName2: {type: String, required: true},
   PPersonLName2: {type: String, required: true},
   PPersonMName2: {type: String, required: true},
   PPersonPosition2: {type: String, required: true},
   PPersonPhoneNo2: {type: Number, required: true},
   PPersonSampleSignature2: {type: String, required: true},
   BEDCCerticate: {type: String, required: true},
   ValidNEMSALicense: {type: String, required: true},
   VendorConsent: {type: String, required: true},
   
   
},{collection: 'principal'});

const model = mongoose.model('Principal', PrincipalSchema);
module.exports = model;

