// src/components/Services.jsx
import { motion } from "framer-motion";
import { FaHome, FaMapMarkedAlt,  FaCouch, FaChartLine, FaRegBuilding } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import PageTransition from "../components/PageTransition";

const services = [
  {
    icon: <FaHome className="text-orange-500 text-4xl" />,
    title: "Residential Sales",
    description: "Beautiful villas, bungalows, and apartments tailored to your needs.",
  },
  {
    icon: <FaMapMarkedAlt className="text-orange-500 text-4xl" />,
    title: "Plot Sales",
    description: "Premium plots for residential and investment purposes.",
  },
  {
    icon: <FaChartLine className="text-orange-500 text-4xl" />,
    title: "Property Valuation",
    description: "Get accurate and competitive market value assessments.",
  },
  {
    icon: <MdHome className="text-orange-500 text-4xl" />,
    title: "Old-to-New Home Swap(આરજો - મારજો)",
    description: "Hassle-free documentation and property registration.",
  },
  {
    icon: <FaCouch className="text-orange-500 text-4xl" />,
    title: "Interior & Home Staging",
    description: "Stylish interiors that make your property stand out.",
  },
  {
    icon: <FaRegBuilding className="text-orange-500 text-4xl" />,
    title: "Investment Consultancy",
    description: "Smart advice for profitable real estate investments.",
  },
];

export default function Services() {
  return (
    <PageTransition>
    <section className="py-16 bg-gray-50 mt-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-orange-600">Services</span>
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Madhav Realty, we provide a range of property solutions designed to meet your unique needs.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </PageTransition>
  );
}
