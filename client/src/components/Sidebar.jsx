import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(
      item.price?.toString().replace(/[^\d.]/g, "")
    );
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={toggleCart} className="text-red-500 font-bold text-xl">
          ×
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto max-h-[75%]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">Ksh {item.price}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded text-lg"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-2 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm"
              >
                ✖
              </button>
            </div>
          ))
        )}
      </div>

      {/* ✅ Checkout Section */}
      {cartItems.length > 0 && (
        <div className="p-4 border-t bg-gray-50 mt-auto">
          <div className="flex justify-between mb-4 font-semibold">
            <span>Total:</span>
            <span>Ksh {totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => {
              alert("Order placed successfully!");
              clearCart();
              toggleCart(); //Closes sidebar
            }}
            className="w-full bg-sky-700 text-white py-2 rounded hover:bg-sky-600"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
