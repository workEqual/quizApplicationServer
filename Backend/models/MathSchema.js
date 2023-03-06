const mongoose = require("mongoose");

const MathSchema = new mongoose.Schema({
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


module.exports=mongoose.model("Maths",MathSchema)