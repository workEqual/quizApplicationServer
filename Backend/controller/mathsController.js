const {MathsQuestions} = require("../DataQuestions/Maths")
const Maths = require("../models/MathSchema")



const createQuestion =async (req,res) =>{
  
  //const {description,alternatives,category}=req.body;
  // if(!description){
  // return res.json({
  //      msg:"Please enter the question"
  //  })
  // }
  // if(!alternatives){
  //  return res.json({
  //      msg:"Please enter the alternatives"
  //   })
  // }
  //if(!category){
  //return res.json({
  //      msg:"Please enter the category"
  //  })
  //}
  const iscreate =await Maths.create(MathsQuestions)
  if(!iscreate){
   return res.json({
        msg:"Question was not created"
    })
  }
  res.json({
    msg:"Question has been created successfully"
  })
}


const deleteQuestion =async (req,res) =>{
  const {questionId} = req.body;
  if(!questionId){
    return res.json({
        msg:"Please the question ID cannot be found"
    })
  }
  const isFound=await Maths.findOne({questionId});
  if(!isFound){
   return res.json({
        msg:"Please question was not found"
    })
  }
 const isDone = await Maths.deleteOne({isFound})
  if(!isDone){
    return res.json({
        msg:"Question was not deleted please try again"
    })
  }
  res.json({
    msg:"Please the question has been deleted successfully"
  })
}

const updateQuestion = (req,res) =>{
  const {questionId} = req.body;
  if(!questionId){
    return res.json({
        msg:"Please this section cannot be empty"
    })
  }
}


const getQuestion =async (req,res) =>{
 const mquestions = await Maths.find();
 res.json({
  questions:mquestions
 })
}
module.exports={
    createQuestion,
    deleteQuestion,
    updateQuestion,
    getQuestion
}