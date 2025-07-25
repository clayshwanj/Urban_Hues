import transactionRoute from "./routes/transactionRoute.js";
import receiptRoute from "./routes/receiptRoute.js";
import orderRoutes from "./routes/orderRoutes.js";

app.use("/api/transactions", transactionRoute);
app.use("/api/receipts", receiptRoute);
app.use("/api/orders", orderRoutes);
