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
        if(validator.validate(product.email))
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
app.get('/newapi/project', async (req,res)=>{
    try{
        const products = await Product.find();
        return res.status(200).send(products);
    }catch(e){
        return res.status(500).send(e)
    }
});
app.get('/newapi/project/:id', async (req,res)=>{
    const _id=req.params.id;
    try{
        const product =await Product.findById(_id);
        return res.status(200).send(product);
    }catch(e){
        return res.status(500).send(e)
    }
});
app.delete('/newapi/project/:id', async (req,res)=>{
    const _id=req.params.id;
    try{
        const product =await Product.findByIdAndDelete(_id);
        if(product){
            res.status(400).send("Product Deleted Successfully");
        }
        else{
            res.send("No Such Product");
        }
    }catch(e){
        return res.status(500).send(e)
    }
});
app.patch('/newapi/project/:id', async(req,res)=>{
    const _id = req.params.id;
    try{
        const product =await Product.findByIdAndUpdate(_id,req.body);
        if(product){
            const productUp = await Product.findById(_id);
            res.status(200).send(productUp);
        }
        else{
            res.status(400).send("Update failed")
        }
    }catch(e){
        return res.status(500).send(e)
    }
});


app.listen(3000,()=>{console.log("Listening on port 3000")})
