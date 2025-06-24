import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import FiltersBar from "../components/FiltersBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allProducts = [
  {
    id: 1,
    name: "Elegant Black Jumpsuit",
    price: "$49.99",
    image: "/img/53860e55-77c4-4e11-bef8-bcbe2681b28f.jpeg",
    category: "sweater",
    color: "green",
  },
  {
    id: 2,
    name: "Classic Black Blazer",
    price: "$89.99",
    image: "/img/f41fe965-eb24-46e0-85b3-6747b8e3f06c.jpeg",
    category: "blouse",
    color: "green",
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    price: "$59.99",
    image: "/img/8284bb7c-0d90-4f27-91b1-78f999a53931.jpeg",
    category: "blouse",
    color: "stripes",
  },
  {
    id: 4,
    name: "Plaid romper",
    price: "Ksh1200",
    image: "/img/Plaid rompa.jpeg",
    category: "romper",
    color: "brown",
  },

  {
    id: 5,
    name: "Short Mini Dress",
    price: "$35.00",
    image:
      "/img/Women's Autumn_Winter College Style Minimalist Sexy Off Shoulder Color Block Waist Fitted Short Mini Dress.jpeg",
    category: "dresses",
    color: "plaid",
  },
  {
    id: 6,
    name: "Wine Red Dress",
    price: "$35.00",
    image: "/img/wine red dress.jpeg",
    category: "dresses",
    color: "red",
  },
  {
    id: 7,
    name: "Black off-shoulder jumpsuit",
    price: "Ksh 700",
    image: "/img/Black Halo Yoli Jumpsuit.jpeg",
    category: "jumpsuit",
    color: "black",
  },
  {
    id: 8,
    name: "Palazo pants",
    price: "Ksh 1000",
    image:
      "/img/Martin Grant Fashion Collections For Women _ Moda Operandi.jpeg",
    category: "pants",
    color: "green",
  },
  {
    id: 9,
    name: "Navy blue pants",
    price: "Ksh 700",
    image: "/img/♡.jpeg",
    category: "pants",
    color: "blue",
  },
  {
    id: 10,
    name: "Blouse",
    price: "Ksh 1000",
    image: "/img/8df879d4-eef8-42a8-b49d-10db518fd7bd.jpeg",
    category: "blouse",
    color: "biege",
  },
  {
    id: 11,
    name: "Off-shoulder sweater",
    price: "Ksh 1000",
    image: "/img/Green off shoulder.jpeg",
    category: "sweater",
    color: "green",
  },
  {
    id: 12,
    name: "Cider Fuzzy Cropped Cardigan With Cami",
    price: "$39.99",
    image:
      "/img/Cider Sweaters _ Cider Fuzzy Cropped Cardigan With Cami In Purple.jpeg",
    category: "sweater",
    color: "purple",
  },
  {
    id: 13,
    name: "Royal Blue pants",
    price: "Ksh 1000",
    image:
      "/img/Zuhair Murad Fashion Collections For Women _ Moda Operandi.jpeg",
    category: "pants",
    color: "blue",
  },
  {
    id: 14,
    name: "Plaid pants",
    price: "Ksh 1000",
    image: "/img/Plaid pants.jpeg",
    category: "pants",
    color: "plaid",
  },
  {
    id: 15,
    name: "Pastel pants",
    price: "Ksh 1000",
    image: "/img/Women's Designer Pants _ Moda Operandi.jpeg",
    category: "pants",
    color: "pink",
  },

  {
    id: 16,
    name: "Pastel pants",
    price: "Ksh 1000",
    image: "/img/84c1ca6f-0ed4-4fb0-aab4-3d7839c0e97f.jpeg",
    category: "pants",
    color: "purple",
  },
  {
    id: 17,
    name: "Pastel pants",
    price: "Ksh 1000",
    image: "/img/0d94ae08-1529-4a58-bec8-cbd5e71b59bc.jpeg",
    category: "pants",
    color: "green",
  },
  {
    id: 18,
    name: "Jumpsuit",
    price: "Ksh 1000",
    image: "/img/Jumpsuitblack.jpeg",
    category: "jumpsuit",
    color: "black",
  },
  {
    id: 19,
    name: "Silk wrap top",
    price: "Ksh 1000",
    image: "/img/Silk Wrap Top.jpeg",
    category: "blouse",
    color: "green",
  },
  {
    id: 20,
    name: "Chiffon blouse",
    price: "Ksh 1000",
    image: "/img/74d33979-d00c-4c2d-b6fa-ec2f9f42c0e1.jpeg",
    category: "blouse",
    color: "biege",
  },
  {
    id: 21,
    name: "Vintage blouse",
    price: "Ksh 1000",
    image:
      "/img/Retro Vintage Clothes Crossed Frenulum Drawstring Side Crop Tank Top (1).jpeg",
    category: "blouse",
    color: "green",
  },
];

const Shop = () => {
  const [filtered, setFiltered] = useState(allProducts);

  const handleFilterChange = (type, value) => {
    if (value === "all") {
      setFiltered(allProducts);
    } else {
      setFiltered(allProducts.filter((p) => p[type] === value));
    }
  };

  return (
    <section className="shop-page bg-orange-100 min-h-screen pt-24">
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
