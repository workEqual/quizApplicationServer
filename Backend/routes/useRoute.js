const express = require("express");
const router = express.Router();
const {
   SignUp,
   VerifyPassword,
   LoginAccount,
   ChangeDetails,
   ForgotPassword

} = require("../controller/userController")


router.post("/create-account",SignUp);
router.post("/login",LoginAccount);
router.post("/verify-password",VerifyPassword);
router.post("/change-profile",ChangeDetails);
router.post("/password-reset",ForgotPassword)


module.exports= router