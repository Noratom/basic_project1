const express = require('express');
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');



dotenv.config();
const app = express();

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err);
    }
}

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT
connectDB().then(()=>{
  app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
})  
})