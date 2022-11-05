require('dotenv').config();
const mongoose = require('mongoose');


//making connection::
mongoose.connect("mongodb://localhost/airbnbclone", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex: true
}).then(()=>{
    console.log(`connection successful`);
}).catch(err => console.log(err));
