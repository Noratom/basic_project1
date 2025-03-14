
      const mongoose= require('mongoose')
      const {Schema}= mongoose
      
      const NetworkSchema = new Schema({
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
         EntryDate: {type: String, required: true},
        
         
      },{collection: 'network'});
      
      const model = mongoose.model('Networks', NetworkSchema);
      module.exports = model;
      
      