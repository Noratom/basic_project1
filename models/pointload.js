
const mongoose= require('mongoose')
const {Schema}= mongoose

const PointloadSchema = new Schema({
   contractorsName: {type: String, required: true},
   contractorEmail: {type: String, required: true},
   proposedSpanOfExtention: {type: String, required: true},
   voltageLevelOfNetwork: {type: String, required: true},
   BEDCRegNo: {type: String, required: true},
   projectDurationEstimate: {type: String, required: true, unique: true},
   contractorPhoneNumber: {type: Number, required: true, unique: true},
   RelocationAddressDescription: {type: String, required: true},
   contractorAttestation:{type: String, required: true},
   clientLetterOfIntroductionAndUndertaking: {type: String, required: true},
   SingleLineDrawing: {type: String, required: true},
   PremisesUse: {type: String, required: true},
   EntryDate: {type: String, required: true},
   clientFirstName: {type: String, required: true},
    clientLastName: {type: String, required: true},
    clientOtherName: {type: String, required: true},
    clientPhoneNumber: {type: String, required: true},
    projectLoadEstimate: {type: String, required: true},
    adminFeePaymentEvidence: {type: String, required: true},
    customerPremisesImage: {type: String, required: true},
    BEDCRegion: {type: String, required: true},
    EstimatedLoadDmandOfTheProject: {type: String, required: true},

},{collection: 'pointload'});

const model = mongoose.model('Pointload', PointloadSchema);
module.exports = model;

