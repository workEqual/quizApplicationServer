const category = require("../models/CategorySchema");
const {categoryData}= require("../DataQuestions/categoryData")



const createCategory = async (req,res) =>{
 const {categoryType} = req.body
 const isFound = await category.findOne({categoryType})
 if(isFound){
    return res.json({
        msg:"Category Type exist already"
    })
 }
 const create =await category.create({categoryType});
 if(!create){
   return res.json({
        msg:"could not add category"
    })
 }
 res.json({
    msg:"created"
 })
}

const getCategory =async (req,res) =>{
 const isFound = await category.find();
 if(!isFound){
    res.json({
        msg:"there are no categories available"
    })
 }
 res.json({
  CategoryData:isFound  
 })
}


module.exports ={
    createCategory,
    getCategory
}