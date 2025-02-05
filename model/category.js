import mongoose from 'mongoose'

const category = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},
{timestamps:true}
   
)

export default mongoose.model("category",category)
