import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name:{type:String,required: true},
    password:{type:String,required: true}
})

const Result=mongoose.models.Result || mongoose.model("Result",schema)


export default Result


