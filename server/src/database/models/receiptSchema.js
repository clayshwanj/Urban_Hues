import mongoose from "mongoose";

const receiptSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  customerName: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Receipt", receiptSchema);
