const express=require('express')
const app=express()
const port=process.env.PORT || 5000
require('dotenv').config()
const connection = require("./dbconnection/connection")


//security on packages
const helmet=require('helmet')
const xss=require('xss-clean')
const cors=require('cors')
const mongoSanitize = require("express-mongo-sanitize")

app.use(cors())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.use(express.json());


//routes
const UserRoute = require("./routes/useRoute");
const PeopleRoute = require("./routes/useProfile")
const CategoryRoute = require("./routes/categoryRoute")
const QuestionRoute = require("./routes/QuestionsRoute")
const ChemistryRoute = require("./routes/chemistryRoute")

app.use("/authentication",UserRoute);
app.use("/users",PeopleRoute)
app.use("/category",CategoryRoute)
app.use("/question",QuestionRoute)
app.use("/chemistry",ChemistryRoute)

app.get("/",(req,res)=>{
   res.json({msg:"hello"})
})

app.listen(port,()=>{
  console.log("connected")
})

const start=async()=>{
    try
    {
      await connection(process.env.MONGO_URI)
      console.log(`you are running on port ${port} 🚀🚀`)
    }
    catch(error){
      console.log("an error occured")
    }
}

start()