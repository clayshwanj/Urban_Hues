import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import FiltersBar from "../components/FiltersBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import allProducts from "../data/products";

const Shop = () => {
  const [filters, setFilters] = useState({ category: "all", color: "all" });
  const [filtered, setFiltered] = useState(allProducts);

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
  };

  useEffect(() => {
    const filteredList = allProducts.filter((product) => {
      const matchCategory =
        filters.category === "all" ||
        (Array.isArray(product.category) &&
          product.category.includes(filters.category));

      const matchColor =
        filters.color === "all" ||
        product.color.toLowerCase().trim() ===
          filters.color.toLowerCase().trim();

      return matchCategory && matchColor;
    });

    setFiltered(filteredList);
  }, [filters]);

  return (
    <section className="shop-page bg-white min-h-screen pt-24">
      <Navbar />

      <div className="px-6 md:px-16">
        <FiltersBar onFilterChange={handleFilterChange} />

        <h2 className="text-3xl md:text-4xl font-semibold text-center my-10 text-gray-700">
          Shop All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Shop;
