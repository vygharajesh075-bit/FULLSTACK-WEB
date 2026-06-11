import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import studyHubRoutes from "./routes/studyHubRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

// 🌟 SAAS STYLE ROUTES (ACTIVATED AGAIN)
app.use("/api/auth", authRoutes);
app.use("/api/studyhub", studyHubRoutes);
app.use("/api/todo", todoRoutes);
app.use("/api/weather", weatherRoutes);

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ☁️"))
  . catch(err => {
    console.error("DB Error 💥", err);
  });

// SERVER
app.listen(5000, "0.0.0.0", () => {
  console.log("🚀 Saas activatedServer running on port 5000");
});