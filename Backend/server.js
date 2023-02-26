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
const BiologyRoute = require("./routes/biologyRoute")
const BioChemistryRoute = require("./routes/biochemistryRoute")
const PhysicsRoute = require("./routes/physicsRoute")
const MathsRoute = require("./routes/mathsRoute")
const GovernmentRoute = require("./routes/governmentRoute")
const FrenchRoute = require("./routes/frenchRoute")
const EnglishRoute = require("./routes/englishRoute")
const GeographyRoute = require("./routes/geographyRoute")
const AgricultureRoute = require("./routes/agricultureRoute")
const EconomicsRoute = require("./routes/economicsRoute")

app.use("/authentication",UserRoute);
app.use("/users",PeopleRoute)
app.use("/category",CategoryRoute)
app.use("/question",QuestionRoute)
app.use("/chemistry",ChemistryRoute)
app.use("/chemistry",BiologyRoute)
app.use("/chemistry",BioChemistryRoute)
app.use("/chemistry",PhysicsRoute)
app.use("/chemistry",MathsRoute)
app.use("/chemistry",GovernmentRoute)
app.use("/chemistry",GeographyRoute)
app.use("/chemistry",FrenchRoute)
app.use("/chemistry",EnglishRoute)
app.use("/chemistry",AgricultureRoute)
app.use("/chemistry",EconomicsRoute)

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