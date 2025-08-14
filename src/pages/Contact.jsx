import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"; // Assuming you have a CSS file for styling
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://madhav-backend-2ryw.onrender.com/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <PageTransition>
    <div className="contact-page pt-20 bg-gray-50 min-h-screen relative overflow-hidden mt-25">
      {/* Floating Bubbles */}
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Have questions? We’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition duration-500">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 text-gray-700"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 text-gray-700"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 text-gray-700"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows="8"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-500 text-gray-700"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:scale-105 transition transform duration-300"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-gray-700 mt-4">{status}</p>
              )}
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                Our Office
              </h3>
              <div className="text-gray-700 mb-2">
              <p>🏢 Madhav Realty</p>
              <p>📍 7X44+RM, Kamrej, Gujarat 394185</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@madhavrealty.com</p>
              </div>
            </div>

            <iframe
              title="Madhav Realty Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.3808603429666!2d72.95409667503807!3d21.257120580449982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04500185e935b%3A0x41bb1321c5e66205!2sNidhivan%20By%20Giriraj!5e1!3m2!1sen!2sin!4v1755019197311!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl shadow-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
