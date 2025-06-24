import React from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Elegant Red Dress",
    price: "$49.99",
    image: "/img/Img1.png",
  },
  {
    id: 2,
    name: "Classic Black Blazer",
    price: "$89.99",
    image: "/img/Img2.png",
  },
  {
    id: 3,
    name: "White Linen Shirt",
    price: "$39.99",
    image: "/img/Img3.png",
  },
  {
    id: 4,
    name: "Pastel Yellow Sundress",
    price: "$54.99",
    image: "/img/Img4.png",
  },
  {
    id: 5,
    name: "Navy Blue Evening Gown",
    price: "$129.99",
    image: "/img/Img6.png",
  },
  {
    id: 6,
    name: "Beige Trench Coat",
    price: "$99.99",
    image: "/img/Img5.png",
  },
  {
    id: 7,
    name: "Beige Trench Coat",
    price: "$99.99",
    image: "/img/Img7.png",
  },
];

const HomePage = () => {
  return (
    <section className="home-page bg-orange-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center text-amber-100"
        style={{
          backgroundImage:
            "url('/img/Private 8-Day Guided Slovenian Adventure Tour.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-center">
          Welcome to Urban Hues
        </h1>
      </div>

      {/* Featured Section */}
      <div className="py-12 px-6 md:px-16 bg-orange-100">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-700">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default HomePage;
