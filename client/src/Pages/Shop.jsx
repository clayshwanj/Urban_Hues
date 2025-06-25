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
    color: "beige",
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
  {
    id: 22,
    name: "Sweater top",
    price: "Ksh 1000",
    image: "/img/bcef861d-c9ed-47d9-a815-d58466a16eaf.jpeg",
    category: "sweater",
    color: "blue",
  },
  {
    id: 23,
    name: "Skater dress",
    price: "Ksh 1000",
    image: "/img/Ruched Strappy Zipper Sleeveless Mini Dress.jpeg",
    category: "dress",
    color: "green",
  },

  {
    id: 24,
    name: "Maroon Dress",
    price: "Ksh 1000",
    image: "/img/maroon dress.jpeg",
    category: "dresses",
    color: "red",
  },
  {
    id: 25,
    name: "Strapped Dress",
    price: "Ksh 1000",
    image: "/img/brown.jpeg",
    category: "dresses",
    color: "brown",
  },
  {
    id: 26,
    name: "Off-shoulderromper",
    price: "Ksh 1000",
    image: "/img/Luxury fashion & independent designers _ SSENSE.jpeg",
    category: "romper",
    color: "checked",
  },
  {
    id: 27,
    name: "Cropped classy blouse",
    price: "Ksh 1000",
    image: "/img/6f84d512-351d-42f8-8222-4693d97a45ba.jpeg",
    category: "blouse",
    color: "white",
  },
  {
    id: 28,
    name: "Denim Top With Puff Sleeves And Bow Tie Detail",
    price: "Ksh 1000",
    image:
      "/img/Plus Size Denim Top With Puff Sleeves And Bow Tie Detail, Blue.jpeg",
    category: "blouse",
    color: "blue",
  },
  {
    id: 29,
    name: "Plaid Print Knot Shoulder Peplum Cami Top",
    price: "Ksh 1000",
    image: "/img/Plaid Print Knot Shoulder Peplum Cami Top.jpeg",
    category: "blouse",
    color: "checked",
  },
  {
    id: 30,
    name: "Plaid top with puffy sleeves",
    price: "Ksh 1000",
    image: "/img/plaid top.jpeg",
    category: "blouse",
    color: "checked",
  },
  {
    id: 31,
    name: "Crop Tank Top In Maroon",
    price: "Ksh 1000",
    image: "/img/Crop Tank Top In Maroon.jpeg",
    category: "blouse",
    color: "red",
  },
  {
    id: 32,
    name: "Formal Blue Dress",
    price: "Ksh 1000",
    image: "/img/SHEIN.jpeg",
    category: "dresses",
    color: "stripes",
  },
  {
    id: 33,
    name: "Goth Long Sleeve Dress",
    price: "Ksh 1000",
    image:
      "/img/Goth Long Sleeve Dress Gothic Harajuku Vintage Plaid Wrap Balck Mini Dress Retro Pleated Punk Long Sleeve Dark.jpeg",
    category: "dresses",
    color: "black",
  },
  {
    id: 34,
    name: "Two-Piece Cold-Shoulder Wrap Knit Dress",
    price: "Ksh 1000",
    image:
      "/img/Fake Two-Piece Cold-Shoulder Wrap Knit Dress in Taupe grey.jpeg",
    category: "dresses",
    color: "brown",
  },
  {
    id: 35,
    name: "Off-shoulder sweater",
    price: "Ksh 1000",
    image: "/img/f5e397b3-e3bc-40b8-ab0d-ee985f21b52a.jpeg",
    category: "sweater",
    color: "green",
  },
  {
    id: 36,
    name: "Summer dress",
    price: "Ksh 1000",
    image: "/img/Stripes.jpeg",
    category: "dresses",
    color: "stripes",
  },
  {
    id: 37,
    name: "Off-shoulder top",
    price: "Ksh 1000",
    image: "/img/921b01f2-c30c-4aaf-9d98-379ffdee2015.jpeg",
    category: "blouse",
    color: "checked",
  },
  {
    id: 38,
    name: "Draped Neck Pleated Slim Fit Tank Top ",
    price: "Ksh 1000",
    image:
      "/img/Plus Size Women's Summer Solid Color Draped Neck Pleated Slim Fit Tank Top (1).jpeg",
    category: "blouse",
    color: "pink",
  },
  {
    id: 39,
    name: "Sleeveless blouse",
    price: "Ksh 1000",
    image: "/img/a2f6aaa1-9acb-478a-bb17-53bedd36d071.jpeg",
    category: "blouse",
    color: "stripes",
  },
  {
    id: 40,
    name: "Blouse with ribbons with long sleeves",
    price: "Ksh 1000",
    image: "/img/e73a2ee8-c658-4984-9cb9-f80083b7e113.jpeg",
    category: "blouse",
    color: "checked",
  },
  {
    id: 41,
    name: "Sleeveless blouse",
    price: "Ksh 1000",
    image:
      "/img/Women Tie Back Simple Denim Crop Top, Casual Everyday Wear.jpeg",
    category: "blouse",
    color: "blue",
  },
  {
    id: 42,
    name: "Women's Lace Up Front Button Up Crop Tank Top",
    price: "Ksh 1000",
    image: "/img/Women's Lace Up Front Button Up Crop Tank Top.jpeg",
    category: "blouse",
    color: "green",
  },
  {
    id: 43,
    name: "Blue striped blouse",
    price: "Ksh 1000",
    image: "/img/0d1c19b5-292e-4ca9-b9a3-6abd538cf343.jpeg",
    category: "blouse",
    color: "stripes",
  },
  {
    id: 44,
    name: "Black romper",
    price: "Ksh 1000",
    image: "/img/Black romper.jpeg",
    category: "romper",
    color: "black",
  },
  {
    id: 45,
    name: " Khaki romper",
    price: "Ksh 1000",
    image: "/img/Brown Khaki romper.jpeg",
    category: "romper",
    color: "brown",
  },
  {
    id: 46,
    name: "Off-shoulder top",
    price: "Ksh 1000",
    image: "/img/Women's Brandon Maxwell Fall_winter.jpeg",
    category: "blouse",
    color: "stripes",
  },
  {
    id: 47,
    name: "Checked dress",
    price: "Ksh 1000",
    image: "/img/Blue and whitechecked dress.jpeg",
    category: "dresses",
    color: "checked",
  },
  {
    id: 48,
    name: "Blue Tribal pattern dress",
    price: "Ksh 1000",
    image: "/img/Blue Tribal pattern dress.jpeg",
    category: "dresses",
    color: "checked",
  },

  {
    id: 49,
    name: "Blue Formal blouse",
    price: "Ksh 1000",
    image: "/img/614ca8d4-6a84-4909-a3b7-4cda4693c59c.jpeg",
    category: "blouse",
    color: "blue",
  },
  {
    id: 50,
    name: "Frayed Edge Casual Romper",
    price: "Ksh 1000",
    image: "/img/Frayed Edge Casual Jumpsuit.jpeg",
    category: "romper",
    color: "stripes",
  },
  {
    id: 51,
    name: "Skirt",
    price: "Ksh 1000",
    image:
      "/img/Significant Other Fashion Collections For Women _ Moda Operandi.jpeg",
    category: "skirt",
    color: "purple",
  },
  {
    id: 52,
    name: "Retro Vintage Crossed Frenulum Drawstring Side Crop Tank Top",
    price: "Ksh 1000",
    image:
      "/img/Retro Vintage Clothes Crossed Frenulum Drawstring Side Crop Tank Top.jpeg",
    category: "blouse",
    color: "purple",
  },
  {
    id: 53,
    name: "Checked dress",
    price: "Ksh 1000",
    image: "/img/Checked dress.jpeg",
    category: "dresses",
    color: "checked",
  },
  {
    id: 54,
    name: "Woolen romper",
    price: "Ksh 1000",
    image: "/img/Sweater romper.jpeg",
    category: "romper",
    color: "biege",
  },
  {
    id: 55,
    name: "Brown Formal pants",
    price: "Ksh 1000",
    image: "/img/brown pants.jpeg",
    category: "pants",
    color: "brown",
  },
  {
    id: 56,
    name: "Silk Blouse",
    price: "Ksh 1000",
    image: "/img/Rasario Fashion Collections For Women _ Moda Operandi.jpeg",
    category: "blouse",
    color: "blue",
  },
  {
    id: 57,
    name: "Brown checked pants",
    price: "Ksh 1000",
    image: "/img/0f29ac69-5120-49c7-9eb3-0ddd37c5ad9b.jpeg",
    category: "pants",
    color: "brown",
  },
  {
    id: 58,
    name: "Offshoulder romper",
    price: "Ksh 1000",
    image: "/img/Offshoulder romper.jpeg",
    category: "romper",
    color: "stripes",
  },
  {
    id: 59,
    name: "Blouse with puffy long sleeves",
    price: "Ksh 1000",
    image: "/img/17297cee-d6b3-4764-963f-8b116239681d.jpeg",
    category: "blouse",
    color: "biege",
  },
  {
    id: 60,
    name: "Offshoulder with puffy sleeves",
    price: "Ksh 1000",
    image: "/img/Offshoulder with puffy sleeves.jpeg",
    category: "blouse",
    color: "checked",
  },
  {
    id: 61,
    name: "Striped multicolored dress",
    price: "Ksh 1000",
    image: "/img/Striped multicolored dress.jpeg",
    category: "dresses",
    color: "stripes",
  },
  {
    id: 62,
    name: "Black Tribal patterned dress",
    price: "Ksh 1000",
    image: "/img/Tribal dress.jpeg",
    category: "dresses",
    color: "black",
  },
  {
    id: 63,
    name: "Black one shoulder peplam",
    price: "Ksh 1000",
    image: "/img/Black one shoulder peplam.jpeg",
    category: "blouse",
    color: "black",
  },
  {
    id: 64,
    name: "Checked dress",
    price: "Ksh 1000",
    image: "/img/♡̶.jpeg",
    category: "dresses",
    color: "checked",
  },
  {
    id: 65,
    name: "Top and skirt",
    price: "Ksh 1000",
    image: "/img/Jeans.jpeg",
    category: "skirt",
    color: "stripes",
  },
  {
    id: 66,
    name: "White jumpsuit",
    price: "Ksh 1000",
    image: "/img/White jumpsuit.jpeg",
    category: "jumpsuit",
    color: "white",
  },
  {
    id: 67,
    name: "Mint colored green pants",
    price: "Ksh 1000",
    image:
      "/img/Here's Proof That Vests Are Making A _Very_ Stylish Comeback.jpeg",
    category: "Pants",
    color: "green",
  },
  {
    id: 68,
    name: "Girly Formal drip",
    price: "Ksh 1000",
    image: "/img/Brown and white outfit.jpeg",
    category: "outfits",
    color: "biege",
  },
  {
    id: 69,
    name: "Girly casual drip",
    price: "Ksh 1000",
    image: "/img/4316a216-421c-4ce1-8e58-303e7cc9f100.jpeg",
    category: "outfits",
    color: "green",
  },
  {
    id: 70,
    name: "Girly but formal drip",
    price: "Ksh 1000",
    image: "/img/517ad041-d73c-4d47-81ca-b44b91bb70f0.jpeg",
    category: "outfits",
    color: "pink",
  },
  {
    id: 71,
    name: "Girly casual drip",
    price: "Ksh 1000",
    image: "/img/b9e8129b-6da1-4b64-8fca-1507130ccefd.jpeg",
    category: "outfits",
    color: "grey",
  },
  {
    id: 72,
    name: "Girly but formal drip",
    price: "Ksh 1000",
    image: "/img/Styles By Na's Amazon Page.jpeg",
    category: "outfits",
    color: "green",
  },
  {
    id: 73,
    name: "Girly casual drip",
    price: "Ksh 1000",
    image: "/img/Summer aesthetic.jpeg",
    category: "outfits",
    color: "pink",
  },
  {
    id: 74,
    name: "Girly Formal drip",
    price: "Ksh 1000",
    image: "/img/3fcfe3ff-3845-469f-961b-55ed97ed60f5.jpeg",
    category: "outfits",
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
