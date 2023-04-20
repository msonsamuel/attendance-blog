const express=require("express")
  const app =express()
  app.use(express.json())
  app.use(express.urlencoded({extended:true}))
  const cors =require("cors")
  app.use(cors())
  const collection= require("./mongos")
  app.get("/", cors(),(req, res)=>{
    res.render("LogIn")
  })
  app.get("/Signup", cors(),(req, res)=>{
    res.render("Signup")
  })
  app.post("/",async(req, res)=>{
const {email, password}=req.body

try{
    const check =await collection.findOne({email:email})
    if(check){
        res.json("exist")
    }
    else{
        res.json("notexist")
        }
}
catch(err)
{
  res.json("notexist");
  console.log(err)
}
  })

  app.post("/Signup",async(req, res)=>{
    const {email, password}=req.body
    const data= {email:email, password:password}
    try{
        const check =await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(err){res.json("notexist")}
      })

  app.listen(8000,()=>{
    console.log("port connected")
  })
  