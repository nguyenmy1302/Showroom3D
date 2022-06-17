import express from "express";
import { createPicture, detelePicture, getPicture, getPictures, updatePicture } from "../controllers/picture.js";
import Picture from "../models/Picture.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//reate
router.post("/", verifyAdmin, createPicture);
//update
router.put("/:id", verifyAdmin, updatePicture);
//delete
router.delete("/:id", verifyAdmin, detelePicture);
//get
router.get("/:id", getPicture);
//get all
router.get("/", getPictures);


export default router