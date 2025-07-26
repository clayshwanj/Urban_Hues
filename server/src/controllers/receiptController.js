import Receipt from "../models/receiptSchema.js";

// Save receipt after checkout
export const createReceipt = async (req, res) => {
  try {
    const { customerId, customerName, items, total } = req.body;

    const newReceipt = new Receipt({
      customerId,
      customerName,
      items,
      total,
    });

    await newReceipt.save();

    res.status(201).json({ message: "Receipt saved", receipt: newReceipt });
  } catch (error) {
    console.error("Error saving receipt:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional: fetch all receipts for a user
export const getReceiptsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const receipts = await Receipt.find({ customerId: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(receipts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch receipts" });
  }
};
