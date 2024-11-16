import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  user_id:{
   type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
   
  } 

},{
    timestamps: true
})

export default mongoose.model("Product", productSchema)