

const GenerateOTP = () =>{
      let otp=""
      for(i=0;i<=3;i++){
       let rand= Math.floor(Math.random()*9)
       otp+=rand
      }
      return otp
}


module.exports ={
    GenerateOTP
}