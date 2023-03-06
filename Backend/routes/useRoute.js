const express = require("express");
const router = express.Router();
const {
   SignUp,
   VerifyPassword,
   LoginAccount,
   ChangeDetails,
   ForgotPassword,
   RequestNewOTP,
   ChangePassword
} = require("../controller/userController")


router.post("/create-account",SignUp);
router.post("/login",LoginAccount);
router.post("/verify-password",VerifyPassword);
router.post("/change-profile",ChangeDetails);
router.post("/forgot-password",ForgotPassword);
router.post("/new-token",RequestNewOTP);
router.post("/reset-password",ChangePassword)


module.exports= router