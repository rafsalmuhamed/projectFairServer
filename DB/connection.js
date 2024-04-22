const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("connected");
    }
).catch(err=>{
    console.log("not connected");
    console.log(err);
})