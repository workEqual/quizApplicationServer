const mongoose = require("mongoose");



const ResultSchema = new mongoose.Schema({
    owner:{
        ref:Profile,
        type:String
    },
    result:{
        type:String
    },
    createdAt : { 
        type : Date, 
        default : Date.now
    }
})

module.exports = mongoose.model("result",ResultSchema)