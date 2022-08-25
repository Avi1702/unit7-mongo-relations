const mongoose=require("mongoose")


const schema=new mongoose.Schema({
       Users_id:String,
       Blog_id:String,
       Category_ids:String,

})

const Blog_Detail=mongoose.model("Blog",schema)

const mongo_relation=async ()=>{
    const connect=await mongoose.connect("mongodb://localhost:27017/Mongo_Relations")
    console.log("connected")

  
}

mongo_relation()
