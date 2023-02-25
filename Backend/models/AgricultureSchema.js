const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const questionId=uuidv4().split('-')[0]
const AgricultureSchema = new mongoose.Schema({
     category:{
      type:String,
      required:[true,"Please provide a category"]
     },
     description :{
        type:String,
        required:[true,"Please enter a question"]
     },
     alternatives:[
    {
        text:{
         type:String,
         required:[true,"Please enter a question"]
        },
        answer:{
            type:Boolean,
            required:true,
        }
    }
     ]
})


module.exports=mongoose.model("Agriculture",AgricultureSchema)