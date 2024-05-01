import express from 'express';
import {
  getBook,
  createBook,
  deleteBook,
  updateBook,
} from "../controllers/book.controller.js";
const router = express.Router();

router.get("/",getBook);
// router.get("/delete", deleteBook);
// router.post("/create", createBook);
// router.post("/update", updateBook);

export default router;