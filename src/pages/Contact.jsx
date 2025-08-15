import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowPopup(false);

    try {
      await axios.post("https://madhav-backend-9xlu.onrender.com/api/contact", formData);
      setStatus("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });

      setShowPopup(true);

      // 🎉 Confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 }
      });

      setTimeout(() => setShowPopup(false), 3000);

    } catch (error) {
      setStatus("Error sending message");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto mt-32 relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-gray-800"
      >
        Contact <span className="text-orange-600">Us</span>
      </motion.h2>

      {/* Flex layout for Form + Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white shadow-xl p-6 rounded-2xl border border-yellow-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {["name", "email", "phone"].map((field, idx) => (
            <motion.input
              key={idx}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={handleChange}
              required
              className=" text-gray-800 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all placeholder:text-gray-800"
              whileFocus={{ scale: 1.02 }}
            />
          ))}
          
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className=" text-gray-800 w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all placeholder:text-gray-800"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-3 rounded-lg w-full shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Office Address + Map */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-md border border-yellow-200">
            <h3 className="text-2xl font-semibold mb-2 text-orange-700">📍 Our Office</h3>
            <p className="text-gray-700">Madhav Realty</p>
            <p className="text-gray-700">opp Nidhivan chowk</p>
            <p className="text-gray-700">7X44+RM, Kamrej, Gujarat 394185</p>
            <p className="mt-2 font-medium text-gray-800">📞 +91 95866 40380</p>
            <p className="font-medium text-gray-800">✉️ info@madhavrealty.com</p>
          </div>

          {/* Google Maps Iframe */}
          <motion.iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.3808603429666!2d72.95409667503807!3d21.257120580449982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04500185e935b%3A0x41bb1321c5e66205!2sNidhivan%20By%20Giriraj!5e1!3m2!1sen!2sin!4v1755019197311!5m2!1sen!2sin"

            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ></motion.iframe>
        </motion.div>
      </div>

      {/* Animated Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 right-10 bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <motion.span
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="text-2xl"
            >
              ✅
            </motion.span>
            <span className="font-medium">{status}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
