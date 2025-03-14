
const mongoose= require('mongoose')
const {Schema}= mongoose

const SubsatationSchema = new Schema({
   contractorsName: {type: String, required: true},
   contractorEmail: {type: String, required: true},
   proposedSpanOfSubstaion: {type: String, required: true},
   voltageLevelOfSubstation: {type: String, required: true},
   BEDCRegNo: {type: String, required: true},
   SubstationName: {type: String, required: true, unique: true},
   SubstationLocation: {type: Number, required: true, unique: true},
   contractorAttestation:{type: String, required: true},
   clientLetterOfIntroductionAndUndertaking: {type: String, required: true},
   SingleLineDrawing: {type: String, required: true},
   AdminFeePaymentEvidence: {type: String, required: true},
   EntryDate: {type: String, required: true},
   BEDCRegion: {type: String, required: true},
   
},{collection: 'substation'});

const model = mongoose.model('Substation', SubsatationSchema);
module.exports = model;

