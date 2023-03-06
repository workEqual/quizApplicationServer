const express = require("express");
const router = express.Router();
const {
createCategory,
getCategory
}=require("../controller/categoryController")


router.post("/create-category",createCategory)
router.get("/Allcategory",getCategory)

module.exports = router 