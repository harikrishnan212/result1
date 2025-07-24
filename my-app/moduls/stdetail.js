import mongoose from "mongoose";


const schema=new mongoose.Schema({
    name:{type:String},
    password:{tyrpe:String}
})

const Result=mongoose.models.Result || mongoose.model("Result",schema)


export default Result