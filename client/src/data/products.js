const allProducts = [
  {
    id: 1,
    name: "Elegant Black Jumpsuit",
    price: "$49.99",
    image: "/img/53860e55-77c4-4e11-bef8-bcbe2681b28f.jpeg",
    category: ["sweater", "casual"],
    color: "green",
  },
  {
    id: 2,
    name: "Classic Green blouse",
    price: "$89.99",
    image: "/img/f41fe965-eb24-46e0-85b3-6747b8e3f06c.jpeg",
    category: ["blouse", "casual"],
    color: "green",
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    price: "$59.99",
    image: "/img/8284bb7c-0d90-4f27-91b1-78f999a53931.jpeg",
    category: ["blouse", "formal"],
    color: "stripes",
  },
  {
    id: 4,
    name: "Plaid romper",
    price: "Ksh1200",
    image: "/img/Plaid rompa.jpeg",
    category: ["romper", "casual"],
    color: "brown",
  },

  {
    id: 5,
    name: "Short Mini Dress",
    price: "$35.00",
    image:
      "/img/Women's Autumn_Winter College Style Minimalist Sexy Off Shoulder Color Block Waist Fitted Short Mini Dress.jpeg",
    category: ["dresses", "formal"],
    color: "plaid",
  },
  {
    id: 6,
    name: "Wine Red Dress",
    price: "$35.00",
    image: "/img/wine red dress.jpeg",
    category: ["dresses", "casual"],
    color: "red",
  },
  {
    id: 7,
    name: "Black off-shoulder jumpsuit",
    price: "Ksh 700",
    image: "/img/Black Halo Yoli Jumpsuit.jpeg",
    category: ["jumpsuit", "formal"],
    color: "black",
  },
  {
    id: 8,
    name: "Palazo pants",
    price: "Ksh 1000",
    image:
      "/img/Martin Grant Fashion Collections For Women _ Moda Operandi.jpeg",
    category: ["pants", "formal"],
    color: "green",
  },
  {
    id: 9,
    name: "Navy blue pants",
    price: "Ksh 700",
    image: "/img/♡.jpeg",
    category: ["pants", "formal"],
    color: "blue",
  },
  {
    id: 10,
    name: "Blouse",
    price: "Ksh 1000",
    image: "/img/8df879d4-eef8-42a8-b49d-10db518fd7bd.jpeg",
    category: ["blouse", "elegant"],
    color: "beige",
  },
  {
    id: 11,
    name: "Off-shoulder sweater",
    price: "Ksh 1000",
    image: "/img/Green off shoulder.jpeg",
    category: ["sweater", "casual"],
    color: "green",
  },
  {
    id: 12,
    name: "Cider Fuzzy Cropped Cardigan With Cami",
    price: "$39.99",
    image:
      "/img/Cider Sweaters _ Cider Fuzzy Cropped Cardigan With Cami In Purple.jpeg",
    category: ["sweater", "casual"],
    color: "purple",
  },
  {
    id: 13,
    name: "Royal Blue pants",
    price: "Ksh 1000",
    image:
      "/img/Zuhair Murad Fashion Collections For Women _ Moda Operandi.jpeg",
    category: ["pants", "formal"],
    color: "blue",
  },
  {
    id: 14,
    name: "Plaid pants",
    price: "Ksh 1000",
    image: "/img/Plaid pants.jpeg",
    category: ["pants", "formal"],
    color: "plaid",
  },
  {
    id: 15,
    name: "Pastel pants",
    price: "Ksh 1000",
    image: "/img/Women's Designer Pants _ Moda Operandi.jpeg",
    category: ["pants", "elegant", "formal"],
    color: "pink",
  },

  {
    id: 16,
    name: "Pastel pants",
    price: "Ksh 1000",
    image: "/img/84c1ca6f-0ed4-4fb0-aab4-3d7839c0e97f.jpeg",
    category: ["pants", "elegant"],
    color: "purple",
  },
  {
    id: 17,
    name: "Pastel pants",
    price: "Ksh 1000",
    image: "/img/0d94ae08-1529-4a58-bec8-cbd5e71b59bc.jpeg",
    category: ["pants", "formal"],
    color: "green",
  },
  {
    id: 18,
    name: "Jumpsuit",
    price: "Ksh 1000",
    image: "/img/Jumpsuitblack.jpeg",
    category: ["jumpsuit", "formal"],
    color: "black",
  },
  {
    id: 19,
    name: "Silk wrap top",
    price: "Ksh 1000",
    image: "/img/Silk Wrap Top.jpeg",
    category: ["blouse", "formal"],
    color: "green",
  },
  {
    id: 20,
    name: "Chiffon blouse",
    price: "Ksh 1000",
    image: "/img/74d33979-d00c-4c2d-b6fa-ec2f9f42c0e1.jpeg",
    category: ["blouse", "formal", "casual"],
    color: "beige",
  },
  {
    id: 21,
    name: "Vintage blouse",
    price: "Ksh 1000",
    image:
      "/img/Retro Vintage Clothes Crossed Frenulum Drawstring Side Crop Tank Top (1).jpeg",
    category: ["blouse", "casual"],
    color: "green",
  },
  {
    id: 22,
    name: "Sweater top",
    price: "Ksh 1000",
    image: "/img/bcef861d-c9ed-47d9-a815-d58466a16eaf.jpeg",
    category: ["sweater", "casual"],
    color: "blue",
  },
  {
    id: 23,
    name: "Skater dress",
    price: "Ksh 1000",
    image: "/img/Ruched Strappy Zipper Sleeveless Mini Dress.jpeg",
    category: ["dress", "casual"],
    color: "green",
  },

  {
    id: 24,
    name: "Maroon Dress",
    price: "Ksh 1000",
    image: "/img/maroon dress.jpeg",
    category: ["dresses", "formal"],
    color: "red",
  },
  {
    id: 25,
    name: "Strapped Dress",
    price: "Ksh 1000",
    image: "/img/brown.jpeg",
    category: ["dresses", "casual"],
    color: "brown",
  },
  {
    id: 26,
    name: "Off-shoulderromper",
    price: "Ksh 1000",
    image: "/img/Luxury fashion & independent designers _ SSENSE.jpeg",
    category: ["romper", "casual"],
    color: "checked",
  },
  {
    id: 27,
    name: "Cropped classy blouse",
    price: "Ksh 1000",
    image: "/img/6f84d512-351d-42f8-8222-4693d97a45ba.jpeg",
    category: ["blouse", "casual"],
    color: "white",
  },
  {
    id: 28,
    name: "Denim Top With Puff Sleeves And Bow Tie Detail",
    price: "Ksh 1000",
    image:
      "/img/Plus Size Denim Top With Puff Sleeves And Bow Tie Detail, Blue.jpeg",
    category: ["blouse", "casual"],
    color: "blue",
  },
  {
    id: 29,
    name: "Plaid Print Knot Shoulder Peplum Cami Top",
    price: "Ksh 1000",
    image: "/img/Plaid Print Knot Shoulder Peplum Cami Top.jpeg",
    category: ["blouse", "casual"],
    color: "checked",
  },
  {
    id: 30,
    name: "Plaid top with puffy sleeves",
    price: "Ksh 1000",
    image: "/img/plaid top.jpeg",
    category: ["blouse", "casual"],
    color: "checked",
  },
  {
    id: 31,
    name: "Crop Tank Top In Maroon",
    price: "Ksh 1000",
    image: "/img/Crop Tank Top In Maroon.jpeg",
    category: ["blouse", "casual"],
    color: "red",
  },
  {
    id: 32,
    name: "Formal Blue Dress",
    price: "Ksh 1000",
    image: "/img/SHEIN.jpeg",
    category: ["dresses", "formal"],
    color: "stripes",
  },
  {
    id: 33,
    name: "Goth Long Sleeve Dress",
    price: "Ksh 1000",
    image:
      "/img/Goth Long Sleeve Dress Gothic Harajuku Vintage Plaid Wrap Balck Mini Dress Retro Pleated Punk Long Sleeve Dark.jpeg",
    category: ["dresses", "casual"],
    color: "black",
  },
  {
    id: 34,
    name: "Two-Piece Cold-Shoulder Wrap Knit Dress",
    price: "Ksh 1000",
    image:
      "/img/Fake Two-Piece Cold-Shoulder Wrap Knit Dress in Taupe grey.jpeg",
    category: ["dresses", "casual"],
    color: "brown",
  },
  {
    id: 35,
    name: "Off-shoulder sweater",
    price: "Ksh 1000",
    image: "/img/f5e397b3-e3bc-40b8-ab0d-ee985f21b52a.jpeg",
    category: ["sweater", "casual"],
    color: "green",
  },
  {
    id: 36,
    name: "Summer dress",
    price: "Ksh 1000",
    image: "/img/Stripes.jpeg",
    category: ["dresses", "casual"],
    color: "stripes",
  },
  {
    id: 37,
    name: "Off-shoulder top",
    price: "Ksh 1000",
    image: "/img/921b01f2-c30c-4aaf-9d98-379ffdee2015.jpeg",
    category: ["blouse", "casual"],
    color: "checked",
  },
  {
    id: 38,
    name: "Draped Neck Pleated Slim Fit Tank Top ",
    price: "Ksh 1000",
    image:
      "/img/Plus Size Women's Summer Solid Color Draped Neck Pleated Slim Fit Tank Top (1).jpeg",
    category: ["blouse", "casual"],
    color: "pink",
  },
  {
    id: 39,
    name: "Sleeveless blouse",
    price: "Ksh 1000",
    image: "/img/a2f6aaa1-9acb-478a-bb17-53bedd36d071.jpeg",
    category: ["blouse", "casual"],
    color: "stripes",
  },
  {
    id: 40,
    name: "Blouse with ribbons with long sleeves",
    price: "Ksh 1000",
    image: "/img/e73a2ee8-c658-4984-9cb9-f80083b7e113.jpeg",
    category: ["blouse", "casual"],
    color: "checked",
  },
  {
    id: 41,
    name: "Sleeveless blouse",
    price: "Ksh 1000",
    image:
      "/img/Women Tie Back Simple Denim Crop Top, Casual Everyday Wear.jpeg",
    category: ["blouse", "casual"],
    color: "blue",
  },
  {
    id: 42,
    name: "Women's Lace Up Front Button Up Crop Tank Top",
    price: "Ksh 1000",
    image: "/img/Women's Lace Up Front Button Up Crop Tank Top.jpeg",
    category: ["blouse", "casual"],
    color: "green",
  },
  {
    id: 43,
    name: "Blue striped blouse",
    price: "Ksh 1000",
    image: "/img/0d1c19b5-292e-4ca9-b9a3-6abd538cf343.jpeg",
    category: ["blouse", "formal"],
    color: "stripes",
  },
  {
    id: 44,
    name: "Black romper",
    price: "Ksh 1000",
    image: "/img/Black romper.jpeg",
    category: ["romper", "casual"],
    color: "black",
  },
  {
    id: 45,
    name: " Khaki romper",
    price: "Ksh 1000",
    image: "/img/Brown Khaki romper.jpeg",
    category: ["romper", "casual"],
    color: "brown",
  },
  {
    id: 46,
    name: "Off-shoulder top",
    price: "Ksh 1000",
    image: "/img/Women's Brandon Maxwell Fall_winter.jpeg",
    category: ["blouse", "formal"],
    color: "stripes",
  },
  {
    id: 47,
    name: "Checked dress",
    price: "Ksh 1000",
    image: "/img/Blue and whitechecked dress.jpeg",
    category: ["dresses", "casual"],
    color: "checked",
  },
  {
    id: 48,
    name: "Blue Tribal pattern dress",
    price: "Ksh 1000",
    image: "/img/Blue Tribal pattern dress.jpeg",
    category: ["dresses", "casual"],
    color: "checked",
  },

  {
    id: 49,
    name: "Blue Formal blouse",
    price: "Ksh 1000",
    image: "/img/614ca8d4-6a84-4909-a3b7-4cda4693c59c.jpeg",
    category: ["blouse", "formal"],
    color: "blue",
  },
  {
    id: 50,
    name: "Frayed Edge Casual Romper",
    price: "Ksh 1000",
    image: "/img/Frayed Edge Casual Jumpsuit.jpeg",
    category: ["romper", "casual"],
    color: "stripes",
  },
  {
    id: 51,
    name: "Skirt",
    price: "Ksh 1000",
    image:
      "/img/Significant Other Fashion Collections For Women _ Moda Operandi.jpeg",
    category: ["skirt", "casual"],
    color: "purple",
  },
  {
    id: 52,
    name: "Retro Vintage Crossed Frenulum Drawstring Side Crop Tank Top",
    price: "Ksh 1000",
    image:
      "/img/Retro Vintage Clothes Crossed Frenulum Drawstring Side Crop Tank Top.jpeg",
    category: ["blouse", "casual"],
    color: "purple",
  },
  {
    id: 53,
    name: "Checked dress",
    price: "Ksh 1000",
    image: "/img/Checked dress.jpeg",
    category: ["dresses", "casual"],
    color: "checked",
  },
  {
    id: 54,
    name: "Woolen romper",
    price: "Ksh 1000",
    image: "/img/Sweater romper.jpeg",
    category: ["romper", "casual"],
    color: "beige",
  },
  {
    id: 55,
    name: "Brown Formal pants",
    price: "Ksh 1000",
    image: "/img/brown pants.jpeg",
    category: ["pants", "formal"],
    color: "brown",
  },
  {
    id: 56,
    name: "Silk Blouse",
    price: "Ksh 1000",
    image: "/img/Rasario Fashion Collections For Women _ Moda Operandi.jpeg",
    category: ["blouse", "formal", "elegant"],
    color: "blue",
  },
  {
    id: 57,
    name: "Brown checked pants",
    price: "Ksh 1000",
    image: "/img/0f29ac69-5120-49c7-9eb3-0ddd37c5ad9b.jpeg",
    category: ["pants", "formal"],
    color: "brown",
  },
  {
    id: 58,
    name: "Offshoulder romper",
    price: "Ksh 1000",
    image: "/img/Offshoulder romper.jpeg",
    category: ["romper", "casual"],
    color: "stripes",
  },
  {
    id: 59,
    name: "Blouse with puffy long sleeves",
    price: "Ksh 1000",
    image: "/img/17297cee-d6b3-4764-963f-8b116239681d.jpeg",
    category: ["blouse", "casual"],
    color: "beige",
  },
  {
    id: 60,
    name: "Offshoulder with puffy sleeves",
    price: "Ksh 1000",
    image: "/img/Offshoulder with puffy sleeves.jpeg",
    category: ["blouse", , "casual"],
    color: "checked",
  },
  {
    id: 61,
    name: "Striped multicolored dress",
    price: "Ksh 1000",
    image: "/img/Striped multicolored dress.jpeg",
    category: ["dresses", "casual", "formal"],
    color: "stripes",
  },
  {
    id: 62,
    name: "Black Tribal patterned dress",
    price: "Ksh 1000",
    image: "/img/Tribal dress.jpeg",
    category: ["dresses", "casual"],
    color: "black",
  },
  {
    id: 63,
    name: "Black one shoulder peplam",
    price: "Ksh 1000",
    image: "/img/Black one shoulder peplam.jpeg",
    category: ["blouse", "casual", "formal"],
    color: "black",
  },
  {
    id: 64,
    name: "Checked dress",
    price: "Ksh 1000",
    image: "/img/♡̶.jpeg",
    category: ["dresses", "casual"],
    color: "checked",
  },
  {
    id: 65,
    name: "Top and skirt",
    price: "Ksh 1000",
    image: "/img/Jeans.jpeg",
    category: ["skirt", "casual"],
    color: "stripes",
  },
  {
    id: 66,
    name: "White jumpsuit",
    price: "Ksh 1000",
    image: "/img/White jumpsuit.jpeg",
    category: ["jumpsuit", "formal"],
    color: "white",
  },

  {
    id: 67,
    name: "Mint colored green pants",
    price: "Ksh 1000",
    image:
      "/img/Here's Proof That Vests Are Making A _Very_ Stylish Comeback.jpeg",
    category: ["Pants", "formal", "elegant"],
    color: "green",
  },
  {
    id: 68,
    name: "Wine Red Summer Dress",
    price: "Ksh 1000",
    image: "/img/1d09bdc95b83e645f3a138198e79add3.jpg",
    category: ["dresses", "casual"],
    color: "red",
  },
  {
    id: 69,
    name: "Grey Woollen Dress",
    price: "Ksh 1000",
    image: "/img/2128127e089d0bf63f9977b42e1d26ad.jpg",
    category: ["dresses", "casual"],
    color: "grey",
  },
  {
    id: 70,
    name: "Red Summer Dress",
    price: "Ksh 1000",
    image: "/img/75c7cb3ce81090be07ce7663c23dd956.jpg",
    category: ["dresses", "casual"],
    color: " red",
  },
  {
    id: 71,
    name: "Girly casual drip",
    price: "Ksh 1000",
    image: "/img/b9e8129b-6da1-4b64-8fca-1507130ccefd.jpeg",
    category: ["outfits", "casual"],
    color: "grey",
  },
  {
    id: 72,
    name: "Girly but formal drip",
    price: "Ksh 1000",
    image: "/img/Styles By Na's Amazon Page.jpeg",
    category: ["outfits", "formal", "elegant"],
    color: "green",
  },
  {
    id: 73,
    name: "Blue top with a pair of denim pants and matching accessories",
    price: "Ksh 1000",
    image: "/img/725b73be-4ad9-4ef3-8fbf-c00119fcc081.jpeg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 74,
    name: "Girly casual drip",
    price: "Ksh 1000",
    image: "/img/4316a216-421c-4ce1-8e58-303e7cc9f100.jpeg",
    category: ["outfits", "casual", "elegant"],
    color: "green",
  },
  {
    id: 75,
    name: "Girly Formal drip",
    price: "Ksh 1000",
    image: "/img/Brown and white outfit.jpeg",
    category: ["outfits", "casual"],
    color: "beige",
  },
  {
    id: 76,
    name: "Girly Formal drip",
    price: "Ksh 1000",
    image: "/img/3fcfe3ff-3845-469f-961b-55ed97ed60f5.jpeg",
    category: ["outfits", "formal", "elegant"],
    color: "green",
  },
  {
    id: 77,
    name: "Girly but formal drip",
    price: "Ksh 1000",
    image: "/img/517ad041-d73c-4d47-81ca-b44b91bb70f0.jpeg",
    category: ["outfits", "formal", "elegant"],
    color: "pink",
  },
  {
    id: 78,
    name: "Girly casual drip",
    price: "Ksh 1000",
    image: "/img/Summer aesthetic.jpeg",
    category: ["outfits", "casual", "elegant"],
    color: "pink",
  },
  {
    id: 79,
    name: "Yellow top and accessories with a pair of stylish jeans",
    price: "Ksh 1000",
    image: "/img/1000074171.jpg",
    category: ["outfits", "casual"],
    color: "yellow",
  },
  {
    id: 80,
    name: "Go green",
    price: "Ksh 1000",
    image: "/img/1000074174.jpg",
    category: ["outfits", "casual"],
    color: "green",
  },
  {
    id: 81,
    name: "Mustard T-shirt and cream colored pants with accessories",
    price: "Ksh 1000",
    image: "/img/1000074172.jpg",
    category: ["outfits", "casual"],
    color: "yellow",
  },
  {
    id: 82,
    name: "Rocking outfit",
    price: "Ksh 1000",
    image: "/img/1000074173.jpg",
    category: ["outfits", "formal", "elegant"],
    color: "brown",
  },
  {
    id: 83,
    name: "Teenager outfits",
    price: "Ksh 1000",
    image: "/img/1000074170.jpg",
    category: ["outfits", "casual"],
    color: "yellow",
  },
  {
    id: 84,
    name: "Girly and pink",
    price: "Ksh 1000",
    image: "/img/1000074175.jpg",
    category: ["outfits", "casual"],
    color: "pink",
  },
  {
    id: 85,
    name: "Cool Outfit",
    price: "Ksh 1000",
    image: "/img/1000074177.jpg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 86,
    name: "Tangerine Inspired",
    price: "Ksh 1000",
    image: "/img/1000074176.jpg",
    category: ["outfits", "casual"],
    color: "orange",
  },
  {
    id: 87,
    name: "Yellow sleeveless top with a pair of denim jeans",
    price: "Ksh 1000",
    image: "/img/1000074178.jpg",
    category: ["outfits", "casual"],
    color: "yellow",
  },
  {
    id: 88,
    name: "Mustard yellow t-shirt with jeans with accessories",
    price: "Ksh 1000",
    image: "/img/1000074179.jpg",
    category: ["outfits", "casual"],
    color: "yellow",
  },
  {
    id: 89,
    name: "Blue unique top with denim jeans and matching accessories",
    price: "Ksh 1000",
    image: "/img/1000074180.jpg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 90,
    name: "Blue unique top with white pants",
    price: "Ksh 1000",
    image: "/img/1000074181.jpg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 91,
    name: "Yellow top with a pair of blue denim jeans and matching accessories",
    price: "Ksh 1000",
    image: "/img/1000074182.jpg",
    category: ["outfits", "casual"],
    color: "yellow",
  },
  {
    id: 92,
    name: "Orange top with knee rugged denim jeans",
    price: "Ksh 1000",
    image: "/img/1000074183 (1).jpg",
    category: ["outfits", "casual"],
    color: "orange",
  },
  {
    id: 93,
    name: "Blue dress",
    price: "Ksh 1000",
    image: "/img/1000074184.jpg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 94,
    name: "Orange top with blue denim jeans",
    price: "Ksh 1000",
    image: "/img/1000074185.jpg",
    category: ["outfits", "casual"],
    color: "orange",
  },
  {
    id: 95,
    name: " Casual Sporty Baseball Jersey, Letter & Number Printed V-Neck T-Shirt",
    price: "Ksh 1000",
    image:
      "/img/Tween Girl' Casual Sporty Baseball Jersey, Letter & Number Printed V-Neck T-Shirt.jpeg",
    category: ["outfits", "casual"],
    color: "purple",
  },
  {
    id: 96,
    name: "Pink top with mom jeans",
    price: "Ksh 1000",
    image: "/img/my closet.jpeg",
    category: ["outfits", "casual"],
    color: "pink",
  },
  {
    id: 97,
    name: "Lace Up Front Skirt",
    price: "Ksh 1000",
    image: "/img/Lace Up Front Skort.jpeg",
    category: ["skirt", "casual"],
    color: "red",
  },
  {
    id: 98,
    name: "Kawaii Plus Size Bow Decor Lantern",
    price: "Ksh 1000",
    image: "/img/ROMWE Kawaii Kawaii Plus Size Bow Decor Lantern….jpeg",
    category: ["sweater", "casual"],
    color: "red",
  },
  {
    id: 99,
    name: "Blue cardigan with cloud prints",
    price: "Ksh 1000",
    image: "/img/Women's Bottoms _ Pants, Skirts, Shorts & Leggings.jpeg",
    category: ["sweater", "casual"],
    color: "blue",
  },
  {
    id: 100,
    name: "Hoodie and sweat pants",
    price: "Ksh 1000",
    image: "/img/SHEIN (1).jpeg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 101,
    name: "Purple Knitted Basketball Jersey Set With Shorts And Vest",
    price: "Ksh 1000",
    image: "/img/Purple Knitted Basketball Jersey.jpeg",
    category: ["outfits", "casual"],
    color: "purple",
  },
  {
    id: 102,
    name: "Blue Top with jeans",
    price: "Ksh 1000",
    image: "/img/🤍🌊🩵🎧.jpeg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 103,
    name: "Formal outfit",
    price: "Ksh 1000",
    image: "/img/3d6a38ff-f4e1-4126-9772-bb98b72ede44.jpeg",
    category: ["outfits", "formal"],
    color: "white",
  },
  {
    id: 104,
    name: "Red Dungaree with matching sweater ",
    price: "Ksh 1000",
    image: "/img/4a3285d8-be76-4375-b525-d1e1f1ad6c3d.jpeg",
    category: ["outfits", "casual"],
    color: "red",
  },
  {
    id: 105,
    name: "Cropped sweater with matching khaki pants and shoes",
    price: "Ksh 1000",
    image: "/img/7d3bf0e3-1248-4f89-b93d-06ca5e9714db.jpeg",
    category: ["outfits", "casual"],
    color: "brown",
  },
  {
    id: 106,
    name: "Pink blouse with floral printed denim pants",
    price: "Ksh 1000",
    image: "/img/89c0afaf-d574-4ec7-bc8e-86572fc388c2.jpeg",
    category: ["outfits", "casual"],
    color: "pink",
  },
  {
    id: 107,
    name: "Blue outfit and accessories",
    price: "Ksh 1000",
    image: "/img/27be1ec4-95c4-4415-8a73-97acec4a4b99.jpeg",
    category: ["outfits", "casual"],
    color: "blue",
  },
  {
    id: 108,
    name: "Matching purple dress,sweater and accessories",
    price: "Ksh 1000",
    image: "/img/40e19e8e-7a24-4c0b-beb3-9d893ac947be.jpeg",
    category: ["outfits", "casual"],
    color: "purple",
  },
  {
    id: 109,
    name: "Pastel Formal dress",
    price: "Ksh 1000",
    image: "/img/70a2ac8b-071d-4eef-aa11-8051a4e10ac0.jpeg",
    category: ["dresses", "formal"],
    color: "blue",
  },
  {
    id: 110,
    name: "Off-shoulder dress",
    price: "Ksh 1000",
    image: "/img/09b30323-dabc-4a0c-9243-d8707818e0ef.jpeg",
    category: ["dresses", "casual"],
    color: "white",
  },
  {
    id: 111,
    name: "Sweater",
    price: "Ksh 1000",
    image: "/img/99a145a4-4f03-49e2-8915-7ea798e5ab3f.jpeg",
    category: ["sweater", "casual"],
    color: "purple",
  },
  {
    id: 112,
    name: "Leopard print layered dress",
    price: "Ksh 1000",
    image: "/img/1000074009.jpg",
    category: ["dresses", "casual"],
    color: "brown",
  },
  {
    id: 113,
    name: "Cool Sweater",
    price: "Ksh 1000",
    image: "/img/726ff52d-139d-4502-b61b-fb4b1051763b.jpeg",
    category: ["sweater", "casual"],
    color: "white",
  },
  {
    id: 114,
    name: "Brown ,Beige and Black pattern",
    price: "Ksh 1000",
    image: "/img/692806bf-1f5a-4f04-bb56-7185224d3d15.jpeg",
    category: ["sweater", "casual"],
    color: "beige",
  },
  {
    id: 115,
    name: "Floral print purple sweater",
    price: "Ksh 1000",
    image: "/img/e5a16590-5f0b-4452-9788-7d3f9332c6b6.jpeg",
    category: ["sweater", "casual"],
    color: "purple",
  },
  {
    id: 116,
    name: "Bardot Ruched Waist",
    price: "Ksh 1000",
    image: "/img/Collegiate Style Minimalist Bardot Ruched Waist.jpeg",
    category: ["dresses", "casual", "formal"],
    color: "black",
  },
  {
    id: 117,
    name: "Green floral print cardigan",
    price: "Ksh 1000",
    image: "/img/c025c077-81fd-4afc-8424-9a1dfe52d903.jpeg",
    category: ["sweater", "casual"],
    color: "green",
  },
  {
    id: 118,
    name: "Purple Sweatshirt and accessories with a pair of denim jeans",
    price: "Ksh 1000",
    image: "/img/be31e992-f50e-42d2-8cdc-39c6903ea49e.jpeg",
    category: ["outfits", "casual"],
    color: "purple",
  },
  {
    id: 119,
    name: "Pink and White Dungaree with matching sweater top and accessories",
    price: "Ksh 1000",
    image: "/img/f0a64875-a489-48f2-938a-dba4bf0e2058.jpeg",
    category: ["outfits", "casual"],
    color: "pink",
  },
  {
    id: 120,
    name: "Grey tracksuit with matching accessories",
    price: "Ksh 1000",
    image: "/img/outfit for ladies.jpeg",
    category: ["outfits", "casual"],
    color: "grey",
  },
  {
    id: 121,
    name: "Butterfly Bell Sleeve Tops Off The Shoulder ",
    price: "Ksh 1000",
    image:
      "/img/Verdusa Women's Y2k 3D Butterfly Bell Sleeve Tops Off The Shoulder Crop Tops Long Sleeve T Shirts.jpeg",
    category: ["blouse", "casual"],
    color: "red",
  },
  {
    id: 122,
    name: "Wrap v neck backless puff sleeve off shoulder oversized sweater",
    price: "Ksh 1000",
    image:
      "/img/wrap v neck backless puff sleeve off shoulder oversized sweater - L _ White.jpeg",
    category: ["sweater", "casual"],
    color: "blue",
  },
  {
    id: 123,
    name: " Star & Sheep Pattern Open Cardigan",
    price: "Ksh 1000",
    image:
      "/img/Plus Size Women's Cute Embroidered Star & Sheep Pattern Open Cardigan.jpeg",
    category: ["sweater", "casual"],
    color: "blue",
  },
  {
    id: 124,
    name: "Floral Patched Bishop Sleeve Cardigan",
    price: "Ksh 1000",
    image: "/img/Teen Girls Floral Patched Bishop Sleeve Cardigan.jpeg",
    category: ["sweater", "casual"],
    color: "purple",
  },
];
export default allProducts;
