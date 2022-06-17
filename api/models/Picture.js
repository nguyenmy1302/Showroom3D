import mongoose from 'mongoose';
const { Schema} = mongoose;

const PictureSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required: true
    },
    author:{ //tac gia
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    // distance:{
    //     type: String,
    //     required: true
    // },
    photos:{
        type: [String],
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    // rooms:{
    //     type: [String],
    // },
    // cheapesPrice:{
    //     type: Number,
    //     required: true
    // },
    // featured:{
    //     type: Boolean,
    //     required: false,
    // },
});

export default mongoose.model("Picture", PictureSchema)