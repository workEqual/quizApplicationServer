const express=require('express')
const app=express()
const port=process.env.PORT || 5000
require('dotenv').config()






//security on packages
const helmet=require('helmet')
const xss=require('xss-clean')
const cors=require('cors')


app.use(cors())
app.use(helmet())
app.use(xss())


app.use(express.json());





const start=async(req,res)=>{
    try
    {
      await connection(process.env.MONGO_URI)
    }
    catch(error){
      console.log("an error occured")
    }
}
start()