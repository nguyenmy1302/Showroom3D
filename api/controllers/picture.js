import Picture from "../models/Picture.js"

export const createPicture = async (req,res,next)=>{
    const newPicture = new Picture(req.body)

    try{
        const savedPicture = await newPicture.save()
        res.status(200).json(savedPicture)
    }catch(err){
    next(err)
    }
}

export const updatePicture = async (req,res,next)=>{
    try{
        const updatePicture = await Picture.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true}
        );
        res.status(200).json(updatePicture);
    }catch(err){
    next(err)
    }
}

export const detelePicture = async (req,res,next)=>{
    try{
        await Picture.findByIdAndDelete(req.params.id);
        res.status(200).json("Tranh da bi xoa.");
    }catch(err){
    next(err);
    }
}

export const getPicture = async (req,res,next)=>{
    try{
        const picture = await Picture.findById(req.params.id);
        res.status(200).json(picture);
    }catch(err){
    next(err)
    }
}

export const getPictures = async (req,res,next)=>{
    try{
        const pictures = await Picture.find();
        res.status(200).json(pictures);
    }catch(err){
    next(err)
    }
}