import mongoose from "mongoose";

// buat schema
const data = mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    cpuname:{
        type: String
    },
    type:{
        type: String
    },
    platform:{
        type: String
    },
    release:{
        type: String
    },
    remainingRam:{
        type: Number
    },
    totalRam:{
        type: Number
    }, 
    
}, {
    versionKey: false
})

export default mongoose.model('data', data)