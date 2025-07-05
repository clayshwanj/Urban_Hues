import { useCart } from "../context/CartContext";

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={toggleCart} className="text-red-500 font-bold text-xl">
          ×
        </button>
      </div>

      <div className="p-4 space-y-4">
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
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
