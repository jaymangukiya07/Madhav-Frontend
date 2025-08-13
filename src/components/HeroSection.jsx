import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";

const bgImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

const features = [
  { icon: "🏡", label: "Luxury Villas" },
  { icon: "🌳", label: "Green Community" },
  { icon: "📍", label: "Prime Location" },
  { icon: "🛡️", label: "Trusted Builder" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Parallax only for desktop
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth > 1024) setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  // Auto image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] sm:h-[85vh] md:h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${bgImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform:
            window.innerWidth > 1024
              ? `translateY(${scrollY * 0.3}px)` // Parallax on desktop only
              : "translateY(0)",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white text-xl z-10">
        ↓ Scroll
      </div>

      {/* Hero Content */}
      <motion.div
        className="text-center text-white p-6 sm:p-10 rounded-xl max-w-4xl w-full z-10 "
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 1.5 }}
      >
        <p className="text-sm md:text-lg tracking-wide uppercase mb-2 text-orange-300 mt-45">
          🔑 Your Dream Home Awaits
        </p>

        <h1 className="text-4xl font-bold text-center text-gray-100 mb-12">
          Madhav <span className="text-yellow-700">Reality</span>
        </h1>

        <motion.p
          className="text-white mt-4 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Proudly Serving Families Since 2005 🏘️
        </motion.p>

        <p className="text-base sm:text-lg md:text-xl text-orange-100 font-semibold mb-6 px-2">
          Residential Villas & Bungalows — Building the future one brick at a time.
        </p>

        {/* Highlights */}
        <div className="space-y-1 text-orange-200 text-sm">
          <p>⭐ Rated 4.9/5 by 500+ Happy Families</p>
          <p>🏆 Gujarat's Most Trusted Real Estate Partner</p>
          <p>🏅 15+ Years of Excellence in Real Estate</p>
          <p>🏠 Over 1000+ Homes Built with Love</p>
          <p>🏡 Your Dream Home is Just a Click Away!</p>
          <p>🏘️ Transforming Spaces, Enriching Lives</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            to="/about"
            className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold border-2 border-orange-600 transition duration-300 shadow-md hover:bg-orange-100 flex items-center gap-2 justify-center"
          >
            Learn More <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold border-2 border-orange-600 transition duration-300 shadow-md hover:bg-orange-100 flex items-center gap-2 justify-center"
          >
            Contact Us <FiPhone />
          </Link>
        </div>

        <Link
          to="/testimonials"
          className="mt-4 text-lg inline-block text-orange-300 underline hover:text-orange-400"
        >
          💬 See what our clients say
        </Link>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-white text-sm sm:text-base">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-lg py-3 px-4 flex flex-col items-center hover:bg-white/20 transition"
            >
              <span className="text-2xl mb-1">{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
