const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const categoryId=uuidv4().split('-')[0]
const CategorySchema = new mongoose.Schema({
    categoryType:{
        type:String,
        required:[true,"Please provide a category"]
    }
})



module.exports= mongoose.model("category",CategorySchema)