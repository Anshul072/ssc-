const express = require("express");
var validator = require("email-validator");
require("./db")
const Product =require("./models")
const app =express();
app.use(express.json());

app.post('/newapi/project',async (req,res)=>{
    try{
        const product =new Product({
        name:req.body.name,
        email:req.body.email
    })
    
    {
        if(validator.validate(email))
       {
           await product.save();
           return res.status(201).send(product);
       }
       else {
        return res.status(500).send("Invalid Email");
    }
    }
    // return res.status(201).send(product)
}catch(e){
    return res.status(500).send(e)
}

});


app.listen(3000,()=>{console.log("Listening on port 3000")})