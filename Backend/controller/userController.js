const Profile = require("../models/UserSchema")
const {
  sendOneTimePassword,
  ResetPasswordToken
} = require("../utils/MailNotification")
const Verification = require("../models/OTPSchema")



//SIGN UP FUNCTION
const SignUp = async(req,res)=>{
  const {name,username,email,password,}=req.body
    //looking to see if there is user with the particular email
    const isFound = await Profile.findOne({email:email})
     if(isFound){
     return  res.json({msg:"An account with this email exist"})
     }

     //checking to see if that username already exist
    const isUsername= await Profile.findOne({username:username})
     if(isUsername){
      return res.json({msg:"A user with this name exist"})
     }
     const details =await Profile.create(req.body)
    
     /*
       This code is to confirm whether the data has been created in the database
       and sends a message
     */
       if (details){ 
    //Generating the OTP
     const OTP = details.GenerateOTP()

     // storing the OTP in a database
     const createOTP= await Verification.create({owner:details.Id,OneTimePassword:OTP})
     if(!createOTP){
       return res.json({msg:"Please request a new one"})
     }

     //This function sends the OTP to the user
    sendOneTimePassword({
       name:name,
       email:email,
       verficationToken:OTP
    })

     res.json({msg:
      "Your has been successfully created please check email for and OTP",
      OTP:OTP
    })
  }

}



//VERIFY ACCOUNT
const VerifyPassword =async(req,res) =>{
  const {userId,OTP} = req.body
  /*
    checking the OTP  database to see if 
    there is an OTP for the user
  */
  const user = await Verification.findOne({userId})
  //Sends an error message if there is no OTP request for the user
  if(!user){
    return res.json({
      msg:"Please request a new OTP"
    })
  }

  //code to check if the OTP entered is correct
  const isCorrect = user.compareToken(OTP)

  /*
  if the OTP is not valid sends an invalid message to the user
  */
  if(!isCorrect){
     return res.json({
      msg:"Please the OTP entered is invalid"
     })
  }

  //code to search for the user
 const person = await Profile.findOne({userId})

 //this changes the verified status of the user
 person.verified = True;

 //saves the changes in the database
 person.save();
 res.json({
  msg:"You have been verified successfully"
 }) 
}


//LOGIN FUNCTION
const LoginAccount = async(req,res) =>{
  const {username,password} = req.body
    //checking if the user did not submit an empty body
     if(!username || !password){
        return res.json({
          msg:"Please provide your details"
        })
     }
    //code to look for the user with that username
  const user =await Profile.findOne({username})
  if(!user){
    res.json({
      msg:"Please this user does not exist"
    })
  }
  //code to compare and verify the password
  const isMatch =await user.comparePassword(password)
   if(!isMatch){
    return res.json({
      msg:"Please password is incorrect"
    })
   }
   res.json({
     user:user.username,
     Id:user.Id
   })
}

//FUNCTON FOR CHANGING USER DETAILS
const ChangeDetails =async (req,res) =>{
 res.json({msg:req.body})
}


//FORGOT PASSWORD FUNCTION
const ForgotPassword =async (req,res) =>{
   const {userprofile} = req.body
   const user =await Profile.findOne({userprofile})
   if(!user){
     res.json({
      msg:"User does not exist"
    })
   }
    //Generating the OTP
    const OTP = user.GenerateOTP()

    // storing the OTP in a database
    const createOTP= await Verification.create({owner:user.Id,OneTimePassword:OTP})

    //sending OTP To the user
    ResetPasswordToken({
     name:user.name,
     email:user.email,
     verificationToken:OTP
    })
   res.json({
    msg:"Please check your mail for your One Time Password"
   })
}


//PASSWORD CHANGING FUNCTION
const ChangePassword = async(req,res) =>{
 const {password,userId} = req.body
  if(!password){
     res.json({
      msg:"Please enter your password"
     })
  }
 const user = await Profile.findOne({userId});
  user.password = password
  user.save()
  res.json({
    msg:"Password has been change successfully",
    user:user
  })
}


//FUNCTION TO REQUEST NEW TOKEN
const RequestNewOTP = async(req,res) =>{
 const {userId} = req.body
 const user = Verification.findOne({userId:userId})
 if(user){
  Verification.deleteOne({user})
 }
 const userprofile =await Profile.findOne({userId:userId})
 const newToken = userprofile.GenerateOTP();
// storing the OTP in a database
     const createOTP= await Verification.create({owner:userprofile.Id,OneTimePassword:newToken})
     if(!createOTP){
       return res.json({msg:"Please request a new one"})
     }
      //This function sends the OTP to the user
    sendOneTimePassword({
       name:userprofile.name,
       email:userprofile.email,
       verficationToken:newToken
    })
 res.json({
  msg:"user deleted",
  newToken:newToken
 })
}


//Don't Touch  this code
const CheckPeople = async(req,res) =>{
 const user = await Profile.find()
 res.json({
   user:user
 })
}



module.exports ={
   SignUp,
   VerifyPassword,
   LoginAccount,
   ChangeDetails,
   ForgotPassword,
   RequestNewOTP,
   ChangePassword,
   CheckPeople
}