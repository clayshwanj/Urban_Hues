import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoute.js";
import transactionRoute from "./routes/transactionRoute.js";
import receiptRoute from "./routes/receiptRoute.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Connect Database
connectDB(process.env.MONGO_URI);

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/api/transactions", transactionRoute);
app.use("/api/receipts", receiptRoute);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("You have requested the home route with GET");
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
