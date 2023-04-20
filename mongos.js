const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/LoginTutorial")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to Connect");
})
const LoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = new mongoose.model("collection",LoginSchema)
module.exports=collection;