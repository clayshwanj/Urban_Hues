import { useCart } from "../context/CartContext";

const MyOrders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const { addToCart } = useCart(); // Custom hook or context function for cart

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`/api/orders/${userId}`);
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    if (userId) fetchOrders();
  }, [userId]);

  const handleBuyAgain = (product, quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 mb-4 rounded">
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total:</strong> ${order.totalAmount}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
            <div className="mt-2">
              {order.items.map(({ productId, quantity }) => (
                <div
                  key={productId._id}
                  className="flex gap-4 items-center mt-4"
                >
                  <img
                    src={productId.image}
                    alt={productId.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex-1">
                    <p>{productId.name}</p>
                    <p>Qty Ordered: {quantity}</p>
                    <p>Price: ${productId.price}</p>
                  </div>
                  <button
                    onClick={() => handleBuyAgain(productId, 1)}
                    className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
                  >
                    Buy Again
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
