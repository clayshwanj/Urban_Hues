import express from "express";
import {
  createTransaction,
  getUserTransactions,
} from "../controllers/transaction.js";

const router = express.Router();

// Create a new transaction (from checkout)
router.post("/", createTransaction);

// Get all transactions for a user (e.g. for receipts page)
router.get("/:userId", getUserTransactions);

export default router;
