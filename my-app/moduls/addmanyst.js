import mongoose from "mongoose";

const schema = new mongoose.Schema({
  stname: { type: String },
  roll_number: { type: String },
  dob: { type: String },
  sub_code:{type:String},
  sub_name:{type:String},
  mark:{type:String},
  pass:{type:Boolean,default:true}
});


const AddMAny_St=mongoose.models.AddMAny_St || mongoose.model("AddMAny_St",schema)

export default AddMAny_St
