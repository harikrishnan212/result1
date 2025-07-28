import mongoose from "mongoose";

const markshema = new mongoose.Schema(
  {
    subcode: { type: String },
    mark: { type: String },
    pass: { type: Boolean, default: true },
  },
  { _id: true }
);

const schema = new mongoose.Schema({
  Roll_number: { type: String },
  dob: { type: String },
  stname: { type: String },
  mark: [markshema],
});

const StResult = mongoose.models.stresult || mongoose.model("stresult", schema);

export default StResult;
