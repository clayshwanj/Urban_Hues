import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section className="contact-page bg-blue-50 min-h-screen pt-24">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-8">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have a question, suggestion, or just want to say hello? We’d love to
          hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p>Urban Hues Boutique, CBD, Nairobi, Kenya</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p>+254 712 345 678</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <p>support@urbanhues.co.ke</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📱 Social Media</h3>
              <p className="space-x-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Instagram
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  TikTok
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Facebook
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
