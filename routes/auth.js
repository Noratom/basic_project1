const express = require('express')
const User = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')


const router = express.Router();
dotenv.config();

router.post('/signup', async(req, res) =>{
    const{name, email, password} = req.body;
 
    if(!name || !email || !password)
    return res.status(404).send({status: 'error', msg: 'All fields must be filled'})

    try{
        const found_email= await User.findOne({email});
        if(found_email)
        return res.status(400).send({status: 'error', msg: 'email already in use'})

        const nPassword= await bcrypt.hash(password, 10)

        let user = new User;

        user .name = name;
        user .email = email;
        user .password = nPassword;

        await user.save();


        const token = jwt.sign({
            _id: user._id,
            email: user.email
        }, process.env.JWT_SECRET);

        return res.status(200).send({ status: 'ok', msg: 'Successfully created', user, token})

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

module.exports = router;