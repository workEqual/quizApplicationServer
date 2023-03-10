const express = require("express");
const router = express.Router();
const {
    createQuestion,
    deleteQuestion,
    updateQuestion,
    getQuestion
} = require("../controller/mathsController")

router.post("/create-Question",createQuestion);
router.post("/deleteQuestion",deleteQuestion);
router.put("/updateQuestion",updateQuestion);
router.get("/questions",getQuestion)



module.exports = router;