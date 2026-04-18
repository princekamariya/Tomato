import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";


const port = Number(process.env.PORT) || 3000;
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    connectDB();
});
