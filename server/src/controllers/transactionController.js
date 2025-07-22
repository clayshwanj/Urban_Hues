import Transaction from "../models/transactionSchema.js";

// Create a new transaction after checkout
export const createTransaction = async (req, res) => {
  try {
    const { userId, items, totalAmount, paymentStatus } = req.body;

    const newTransaction = new Transaction({
      userId,
      items,
      totalAmount,
      paymentStatus: paymentStatus || "paid",
    });

    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

// 📌 Get all transactions for a specific user
export const getUserTransactions = async (req, res) => {
  try {
    const { userId } = req.params;

    const transactions = await Transaction.find({ userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching user transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};
