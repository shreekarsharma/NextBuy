import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
server.use("/uploads", express.static(path.join(path.resolve(), "uploads")));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`✅ NextBuy database connected successfully`);
  })
  .catch((err) => console.error(`❌ Unable to connect to database : ${err}`));
server.use("/api/auth", authRoutes);
server.listen(PORT, () => {
  console.log(`NextBuy Server running on port ${PORT}`);
});
