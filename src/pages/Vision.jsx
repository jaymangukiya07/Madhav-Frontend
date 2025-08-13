import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import CoreValues from "./visioncontent/CoreValues";
import PageTransition from "../components/PageTransition"; // Importing PageTransition component

export default function VisionMission() {
  return (
    <PageTransition>
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white mt-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Vision <span className="text-orange-600">& Mission</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-orange-500"
          >
            <div className="flex items-center mb-4">
              <FaEye className="text-yellow-600 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be Gujarat’s most trusted and innovative real estate consultancy,
              connecting families with their dream homes and delivering excellence
              at every step.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition-shadow border-t-4 border-orange-500"
          >
            <div className="flex items-center mb-4">
              <FaBullseye className="text-yellow-600 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-600">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide transparent, ethical, and client-focused real estate
              services with a perfect blend of local expertise and modern
              technology, ensuring satisfaction in every transaction.
            </p>
          </motion.div>
        </div>
        {/* Core Values */}
        <CoreValues />
      </div>
    </section>
    </PageTransition>
  );
}
