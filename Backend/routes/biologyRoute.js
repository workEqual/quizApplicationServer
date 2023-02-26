const express = require("express");
const router = express.Router();
const {
    createQuestion,
    deleteQuestion,
    updateQuestion
} = require("../controller/biologyController")

router.post("/create-Question",createQuestion);
router.post("/deleteQuestion",deleteQuestion);
router.put("/updateQuestion",updateQuestion);



module.exports = router;