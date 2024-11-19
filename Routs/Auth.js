import express from "express";
import { Register , Login,UserProfile } from "../controlers/Auth.js";

const router = express.Router();

router.post("/register", Register)
router.post("/login", Login)
router.get("/profile/:user_id", UserProfile)
export default router;