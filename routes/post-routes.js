import { Router } from "express";
import {
  ctrlCreatePost,
  crtlGeAllPost,
  verificarVlidaciones,
} from "../controllers/post-controllers.js";
import { createPostValidation } from "../validations/create-post-validations.js";

const postsRouter = Router();

postsRouter.get("/", crtlGeAllPost);
postsRouter.post(
  "/",
  createPostValidation,
  verificarVlidaciones,
  ctrlCreatePost
);

export { postsRouter };
