const mongoose =require("mongoose");

const productSchema = require("./schema")
 
const Product = mongoose.model("Products",productSchema);

module.exports = Product;