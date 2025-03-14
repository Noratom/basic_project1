

      const mongoose= require('mongoose')
      const {Schema}= mongoose
      
      const TechconSchema = new Schema({
         Username: {type: String, required: true},
         Password: {type: String, required: true},
         Name: {type: String, required: true},
         Staffid: {type: String, required: true},
         BEDCRegNo: {type: String, required: true},
         Created: {type: String, required: true, unique: true},
         BEDCRegion: {type: String, required: true},
         BU: {type: String, required: true},
         
         
      },{collection: 'techcon'});
      
      const model = mongoose.model('Techcon', TechconSchema);
      module.exports = model;
      
      