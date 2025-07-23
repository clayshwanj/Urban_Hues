import React, { useEffect, useState } from "react";
import { getUserReceipts } from "../services/receiptService";
import { useSelector } from "react-redux"; // or your auth logic
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyReceipts = () => {
  const user = useSelector((state) => state.auth.user); // adjust if you're not using Redux
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const data = await getUserReceipts(user._id);
        setReceipts(data);
      } catch (err) {
        console.error("Failed to load receipts:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?._id) fetchReceipts();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700">
          My Receipts
        </h2>

        {loading ? (
          <p className="text-center">Loading receipts...</p>
        ) : receipts.length === 0 ? (
          <p className="text-center text-gray-600">No receipts found.</p>
        ) : (
          receipts.map((receipt) => (
            <div
              key={receipt._id}
              className="bg-white shadow-md border border-gray-300 p-6 mb-6 font-mono text-sm text-gray-900"
            >
              <h3 className="text-center text-lg font-bold mb-2">Urban Hues</h3>
              <div className="text-center mb-4 text-xs text-gray-500">
                {new Date(receipt.createdAt).toLocaleString()}
              </div>
              <p className="mb-2">Customer: {receipt.customerName}</p>
              <ul className="mb-4">
                {receipt.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b border-dotted py-1"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>Ksh {item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>Ksh {receipt.total}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyReceipts;
