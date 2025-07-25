import express from "express";
import { getUserOrders } from "../controllers/orderController.js";

const router = express.Router();

// GET /api/orders/:userId
router.get("/:userId", getUserOrders);

export default router;
