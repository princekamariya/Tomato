import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const port = Number(process.env.PORT) || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

app.listen(port, async () => {
    await connectDB();
    console.log(`Listening on port ${port}`);
});
