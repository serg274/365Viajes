import { listOfPost } from "../models/post-model.js";
import { validationResult } from "express-validator";

export const verificarVlidaciones = (req, res, next) => {
  const errors = validationResult(req);
  if (errors) {
    return res.status(400).json(errors)
  }
  next();
}

export function ctrlCreatePost(req, res){
  const errors = validationResult(req);

  if (errors) {
    return res.status(400).json(errors)
  }

  const { title, desc, image } = req.body;

  listOfPost.push({ title, desc, image });
}