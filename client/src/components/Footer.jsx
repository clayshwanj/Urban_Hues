import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-black py-12 px-4 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            GET 20% OFF YOUR FIRST ORDER
          </h3>
          <p className="mb-4 text-sm">
            Subscribe to our newsletter for exclusive deals and style tips.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black p-2 w-full focus:outline-none"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">CATEGORIES</h4>
          <ul className="space-y-2 text-sm">
            {[
              "New Arrivals",
              "Dresses",
              "Tops",
              "Accessories",
              "Men's Wear",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-sky-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-bold mb-4">CUSTOMER CARE</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Size Guide",
              "Help & FAQs",
              "Returns & Exchanges",
              "Track Order",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-sky-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies + Social */}
        <div>
          <h4 className="text-lg font-bold mb-4">POLICIES</h4>
          <ul className="space-y-2 text-sm mb-6">
            {[
              "Shipping Info",
              "Privacy Policy",
              "Terms & Conditions",
              "Payment Methods",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-sky-700">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-bold mb-3">FOLLOW US</h4>
          <div className="flex gap-4 text-black">
            <a href="#" className="hover:text-sky-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-700">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-sky-700">
              <FaPinterest size={20} />
            </a>
            <a href="#" className="hover:text-sky-700">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-pink-300 mt-10 pt-6 text-center text-sm text-black">
        © {new Date().getFullYear()} Urban Hues. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
