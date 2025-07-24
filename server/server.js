import transactionRoute from "./routes/transactionRoute.js";
import receiptRoute from "./routes/receiptRoute.js";

app.use("/api/transactions", transactionRoute);
app.use("/api/receipts", receiptRoute);
