const mongoose = require("mongoose")
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');


const UserId=uuidv4().split('-')[0]
const ProfileSchema = new mongoose.Schema({
   Id:{
     type:String,
     default:UserId
   },
    name:{
    type:String,
    required:[true,'please provide a name']
  },
  username:{
    type:String,
    required:[true,'please provide a username'],
    unique:true
  },
 email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  password:{
    type:String,
    required:[true,'please provide your password'],
    minlength:8,
    unique:true
  },
  verified:{
    type:Boolean,
    required:true,
    default:false
  },
})

//hashing of the password is done here
ProfileSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


//creating a token
ProfileSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this.Id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRY,
    }
  )
}



//creating an otp
ProfileSchema.methods.GenerateOTP = function (){
    let otp=""
      for(i=0;i<=3;i++){
       let rand= Math.floor(Math.random()*9)
       otp+=rand
      }
      return otp
}


//comparing the function
ProfileSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

ProfileSchema.methods.HashPassword = async function (newPass){
 const salt = await bcrypt.genSalt(10)
 const pass = await bcrypt.hash(newPass,salt)
 return pass
}

module.exports = mongoose.model("Profile",ProfileSchema)