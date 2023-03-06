const express = require("express");
const router = express.Router();
const {
    CheckPeople
} = require("../controller/userController")




router.get("/people",CheckPeople);

module.exports = router;