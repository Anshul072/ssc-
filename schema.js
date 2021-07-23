const mongoose = require("mongoose");


const {Schema}= mongoose;

const productSchema =new Schema({
    name:{
        type:String,
        minlength:2,
        required :true,
    },
    email:{
        type:String,
        minlength:2,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now,
    }
})

module.exports = productSchema
