const jwt = require("jsonwebtoken")


const Authentication = (req,res,next) =>{
  const authToken = req.headers.authorization;
  if(!authToken){
    res.json({msg:"Please sign in"})
  }
  const token = authToken.split()[1]
}





module.exports = Authentication