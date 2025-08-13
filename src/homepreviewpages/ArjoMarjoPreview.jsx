// src/pages/ArjoMarjo.jsx
import React from "react";
import PageTransition from "../components/PageTransition"; // Importing PageTransition component
import {
  FaHome,
  FaHandshake,
  FaExchangeAlt,
  FaClock,
  FaGavel,
  FaThumbsUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ArjoMarjoPreview() {
  return (
    <PageTransition>
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24 mt-40">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            આરજો - મારજો સેવા
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            તમારી જૂની મિલકત અમને આપો અને અમારા પ્રોજેક્ટમાં નવું સપનાનું ઘર મેળવો — 
            સરળ પ્રક્રિયા, પારદર્શક સોદો અને સમયસર હેન્ડઓવર સાથે શ્રેષ્ઠ અનુભવ.
          </p>
        </motion.div>

        {/* How it Works */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            કેવી રીતે કામ કરે છે?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaGavel />, title: "મૂલ્યાંકન", desc: "તમારી મિલકતનું પારદર્શક બજાર મૂલ્યાંકન." },
              { icon: <FaHandshake />, title: "સોદો", desc: "ન્યાયી અને પારદર્શક કરાર પ્રક્રિયા." },
              { icon: <FaHome />, title: "નવું ઘર પસંદ", desc: "અમારા પ્રોજેક્ટમાંથી તમારું સપનાનું ઘર પસંદ કરો." },
              { icon: <FaExchangeAlt />, title: "એકસાથે બદલાવો", desc: "જૂનું ઘર આપો અને નવું ઘર મેળવો — એકસાથે." },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-500 text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            શા માટે પસંદ કરો "આરજો - મારજો"?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaClock />, title: "ઝડપી પ્રક્રિયા", desc: "સમયસર હેન્ડઓવર અને ઝડપી ડીલ ક્લોઝિંગ." },
              { icon: <FaThumbsUp />, title: "વિશ્વાસપાત્ર સેવા", desc: "સ્થાનિક નિષ્ણાતો દ્વારા માર્ગદર્શન અને સહાય." },
              { icon: <FaHandshake />, title: "પારદર્શક સોદો", desc: "બજાર આધારિત ન્યાયી કિંમત અને ક્લિયર કોન્ટ્રાક્ટ." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-500 text-4xl">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-yellow-500 text-white p-8 rounded-2xl text-center shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">તમારું નવું ઘર તમારી રાહ જોઈ રહ્યું છે!</h3>
          <p className="text-lg mb-6">
            "આરજો - મારજો" સાથે ઘર બદલવાનો સરળ, ઝડપી અને વિશ્વાસપાત્ર રસ્તો પસંદ કરો.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            અમારો સંપર્ક કરો
          </Link>
        </motion.div>
      </div>
    </section>
    </PageTransition>
  );
}
