import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import petRoutes from "./routes/petroutes.js";
import blogRoutes from "./routes/blogroutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/pets", petRoutes);
app.use("/blogs", blogRoutes);

// DB Connect
connectDB();

// ROUTES
app.use("/auth", authRoutes);

app.listen(5001, () => console.log("Server running on port 5001"));
