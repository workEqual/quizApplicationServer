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
app.use("/chemistry",ChemistryRoute)
app.use("/biology",BiologyRoute)
app.use("/biochemistry",BioChemistryRoute)
app.use("/physics",PhysicsRoute)
app.use("/maths",MathsRoute)
app.use("/government",GovernmentRoute)
app.use("/grography",GeographyRoute)
app.use("/french",FrenchRoute)
app.use("/english",EnglishRoute)
app.use("/agriculture",AgricultureRoute)
app.use("/economics",EconomicsRoute)

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