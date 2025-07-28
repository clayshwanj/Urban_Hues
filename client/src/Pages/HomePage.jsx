import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import allProducts from "../data/products";
import ScrollToggleButton from "../components/scrollButton";

const HomePage = () => {
  const [filters, setFilters] = useState({ category: "all", type: "all" });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory =
      filters.category === "all" ||
      (Array.isArray(product.category) &&
        product.category.includes(filters.category));

    const matchType =
      filters.type === "all" ||
      (Array.isArray(product.category) &&
        product.category.includes(filters.type));

    return matchCategory && matchType;
  });

  return (
    <section className="home-page bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative w-full h-[150vh] bg-cover bg-center flex items-center justify-center text-amber-100"
        style={{
          backgroundImage:
            "url('/img/Excited black woman holding shopping.jpeg')",
        }}
      >
        <div className="absolute inset-0"></div>
        <p className="relative text-3xl md:text-3xl font-semibold text-center text-black">
          Where women shop for best clothes
        </p>
      </div>

      {/* Featured Collection */}
      <div className="py-12 px-6 md:px-16 bg-white">
        <ScrollToggleButton />
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-700">
          Featured Collection
        </h2>

        {/* Style Filters (casual, formal, elegant) */}
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          {["all", "casual", "formal", "elegant"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border font-medium transition duration-300 shadow-md ${
                filters.category === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700 border-blue-700 hover:bg-blue-100"
              }`}
              onClick={() => handleFilterChange("category", cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)} Wear
            </button>
          ))}
        </div>

        {/* Clothing Type Filters (dresses, romper, blouse, etc.) */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {[
            "all",
            "dresses",
            "romper",
            "blouse",
            "sweater",
            "pants",
            "jumpsuit",
            "skirt",
            "outfits",
          ].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-full border font-medium transition duration-300 shadow-md ${
                filters.type === type
                  ? "bg-pink-700 text-white"
                  : "bg-white text-pink-700 border-pink-700 hover:bg-pink-100"
              }`}
              onClick={() => handleFilterChange("type", type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
