import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-contain rounded mb-4 max-h-80"
      />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-pink-700 font-bold mb-4">{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-400 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
