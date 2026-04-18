import express from "express";
import { addUserRole, login, myProfile } from "../controller/auth.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login", login);
router.put("/add/role", isAuth, addUserRole);
router.get("/me", isAuth, myProfile);   

export default router;
