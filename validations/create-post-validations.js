import { body } from "express-validator";
export const createPostValidation = [
  body("title")
    .notEmpty()
    .withMessage("El titulo es requerido")
    .isString()
    .withMessage("El titulo debe ser un string"),
  body("desc")
    .notEmpty()
    .withMessage("La descripcion es requerida")
    .isString()
    .withMessage("La descripcion debe ser un string")
    .body("image")
    .notEmpty()
    .withMessage("La imagen es requerida.")
    .isURL()
    .withMessage("La imagen debe ser una URL."),
];
