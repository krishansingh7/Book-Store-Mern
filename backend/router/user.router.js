import express from 'express';
const router = express.Router();

import {
  getUsers,
  signupUser,
  loginUser,
} from "../controllers/user.controller.js";

router.get("/",getUsers)
router.post("/login", loginUser);
router.post("/signup", signupUser);


export default router;