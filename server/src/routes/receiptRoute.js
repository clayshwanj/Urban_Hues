import express from "express";
import {
  createReceipt,
  getReceiptsByUser,
} from "../controllers/receiptController.js";

const router = express.Router();

router.post("/", createReceipt);
router.get("/:userId", getReceiptsByUser);

export default router;
