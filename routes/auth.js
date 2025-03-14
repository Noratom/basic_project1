const express = require('express')
const Contractor = require('../models/contractors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const Principal = require('../models/Principal')
const Network = require('../models/network')


const router = express.Router();
dotenv.config();

router.post('/signup_contractor', async(req, res) =>{
    const{companyName, email, companyAddress, contractoryCategory, BEDCRegNo, NEMSAClass, phoneNumber, entryDate} = req.body;
 
    if(!companyName || !email || !companyAddress || !contractoryCategory || !BEDCRegNo || !NEMSAClass || !phoneNumber || !entryDate)
    return res.status(404).send({status: 'error', msg: 'All fields must be filled'})

    try{
        const found_BEDC= await Contractor.findOne({BEDCRegNo});
        if(found_BEDC)
        return res.status(400).send({status: 'error', msg: 'Contractor already exist'})

        let contractor = new Contractor;

        contractor .companyName = companyName;
        contractor .companyAddress = companyAddress;
        contractor .email = email;
        contractor .contractoryCategory = contractoryCategory;
        contractor .BEDCRegNo = BEDCRegNo;
        contractor .NEMSAClass = NEMSAClass;
        contractor .phoneNumber = phoneNumber;
        contractor .entryDate = entryDate;

        await contractor.save();

        return res.status(200).send({ status: 'ok', msg: 'Successfully created', contractor})

    }catch(e){ 
        console.log(e);
        res.status(400).send({status:'error', msg: 'some error occured', e  })
    }
})


router.post('/login', async(req, res) =>{
    const {email, password} = req.body;

    if(!email || !password) 
     return res.status(404).send({ status: 'error', msg:'all fields must be filled'})

    try{
        const user = await User.findOne({email})
        if(!user)
            return res.status(404).send({ status : 'error', msg: 'no user found'});

        const correct = await bcrypt.compare(password, user.password)

        if(correct) 

        user.password = '';

        const token= jwt.sign({
            _id : user._id,
            email: user.email
        }, process.env.JWT_SECRET)
        res.status(200).send({status: 'ok', msg:'Login successful', user, token});


    }catch(e){
        console.log(e)
        return res.status(400).send({status: 'error', msg:'some error occured', e})
    }


})

router.post('/regcheck', async (req, res) => {
    const { BEDCRegNo } = req.body;
    console.log(BEDCRegNo)

    if(!BEDCRegNo) 
      return res.status(400).send({ status: 'error', msg:'all fields must be filled'})


    try {
      const contractor = await Contractor.findOne({ BEDCRegNo }).lean();

      if (!contractor) {
        return res.status(400).send({ status: 'error', msg:'Contractor not found'}) // Send contractor data to client-side
      }
      
      return res.status(200).send({ status: 'ok', msg:'Successful', BEDCRegNo, contractor });


    } catch (e) {
       console.log(e)
        return res.status(400).send({status: 'error', msg:'some error occured', e})
    }
  });
  
module.exports = router;

// Route to handle form submission
router.post('/submitForm', async (req, res) => {
    
      const { contractorsName, contractorEmail, ContractorAddress, PhoneNo, BEDCRegNo, PPersonFName1, PPersonLName1, PPersonMName1,PPersonPosition1, PPersonPhoneNo1, PPersonSampleSignature1, EntryDate, PPersonFName2, PPersonLName2, PPersonMName2, PPersonPhoneNo2, PPersonPosition2, PPersonSampleSignature2, BEDCCerticate, ValidNEMSALicense, VendorConsent} = req.body;
       
      if( !contractorsName || !contractorEmail || !ContractorAddress || !PhoneNo || !BEDCRegNo || !PPersonFName1 || !PPersonLName1 || !PPersonMName1 || !PPersonPosition1 || !PPersonPhoneNo1 || !PPersonSampleSignature1 || !EntryDate || !PPersonFName2 || !PPersonLName2 || !PPersonMName2 || !PPersonPhoneNo2 || !PPersonPosition2 || !PPersonSampleSignature2 || !BEDCCerticate || !ValidNEMSALicense ||!VendorConsent) 
        return res.status(400).send({ status: 'error', msg:'all fields must be filled'})
  
      
      try {

      // Create a new document using the data from the form
      const principal = new Principal

        principal.contractorsName = contractorsName,
        principal.contractorEmail = contractorEmail,
        principal.ContractorAddress = ContractorAddress,
        principal.PhoneNo = PhoneNo,
        principal.BEDCRegNo = BEDCRegNo,
        principal.PPersonFName1 = PPersonFName1,
        principal.PPersonLName1 = PPersonLName1,
        principal.PPersonMName1 = PPersonMName1,
        principal.PPersonPosition1 = PPersonPosition1,
        principal.PPersonPhoneNo1 = PPersonPhoneNo1,
        principal.PPersonSampleSignature1 = PPersonSampleSignature1,
        principal.EntryDate = EntryDate,
        principal.PPersonFName2 = PPersonFName2,
        principal.PPersonLName2 = PPersonLName2,
        principal.PPersonMName2 = PPersonMName2,
        principal.PPersonPosition2 = PPersonPosition2,
        principal.PPersonPhoneNo2 = PPersonPhoneNo2,
        principal.PPersonSampleSignature2 = PPersonSampleSignature2,
        principal.BEDCCerticate = BEDCCerticate,
        principal.ValidNEMSALicense = ValidNEMSALicense,
        principal.VendorConsent = VendorConsent
      
  
      // Save the document to MongoDB
      await principal.save();

      res.status(200).send({ status: 'ok', msg: 'Saved Successfully'});


    } catch (e) {
      console.log(e);
      res.status(500).send({ status: 'error', msg: 'An error occurerd' });
    }
})

// Route to handle network form submission
router.post('/NetworkForm', async (req, res) => {
    
  const { contractorsName, contractorEmail, BEDCRegNo, proposedSpanOfExtention, voltageLevelOfNetwork, projectDurationEstimate, contractorPhoneNumber , RelocationAddressDescription , clientLetterOfIntroductionAndUndertaking, contractorAttestation, SingleLineDrawing, EntryDate} = req.body;
   
  if( !contractorsName || !contractorEmail || !BEDCRegNo || !proposedSpanOfExtention || !voltageLevelOfNetwork || !projectDurationEstimate || !contractorPhoneNumber || !RelocationAddressDescription || !clientLetterOfIntroductionAndUndertaking || !contractorAttestation || !SingleLineDrawing || !EntryDate) 
    return res.status(400).send({ status: 'error', msg:'all fields must be filled'})

  
  try {

  // Create a new document using the data from the form
  const network = new Network

    network.contractorsName = contractorsName,
    network.contractorEmail = contractorEmail,
    network.proposedSpanOfExtention = proposedSpanOfExtention,
    network.voltageLevelOfNetwork = voltageLevelOfNetwork,
    network.BEDCRegNo = BEDCRegNo,
    network.projectDurationEstimate = projectDurationEstimate,
    network.contractorPhoneNumber = contractorPhoneNumber,
    network.RelocationAddressDescription = RelocationAddressDescription,
    network.contractorAttestation = contractorAttestation,  
    network.clientLetterOfIntroductionAndUndertaking = clientLetterOfIntroductionAndUndertaking,
    network.SingleLineDrawing = SingleLineDrawing,
    network.EntryDate = EntryDate,

   

  // Save the document to MongoDB
  await network.save();

  res.status(200).send({ status: 'ok', msg: 'Saved Successfully'});


} catch (e) {
  console.log(e);
  res.status(500).send({ status: 'error', msg: 'An error occurerd' });
}
})

module.exports = router;