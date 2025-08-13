// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition"; // Importing PageTransition component

export default function About() {
  return (
    <PageTransition>
    <div className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white mt-23"
        style={{ backgroundImage: "url('hero2.jpg')" }}>
        

        <div className=" bg-opacity-50 ">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              About <span className="text-yellow-600">Madhav Reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-lg md:text-xl"
            >
              Building dreams since 2008
            </motion.p>
          </div>
        </div>
        
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/ourstory.jpg"
            alt="Our Story"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our <span className="text-orange-600">Story</span></h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2008, Madhav Infra has grown from a small local real estate agency
              to one of Gujarat's most trusted property consultants. What began as a family
              business in Ahmedabad has now expanded across major cities, helping thousands
              of families find their perfect homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our <span className="text-orange-600">Mission</span></h2>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          >
            We’re committed to transparent, ethical real estate practices that put our clients first.
            Our team combines local market expertise with modern technology to deliver exceptional service.
          </motion.p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cover bg-fixed text-w py-16gray-50"
        style={{ backgroundImage: "url('/hero3.jpg')" }}>
        <div className=" bg-opacity-60 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8"
            >
              Core Values
            </motion.h2>
            <ul className="space-y-4 text-lg">
              <motion.li initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>✓ Integrity in every transaction</motion.li>
              <motion.li initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>✓ Client-first approach</motion.li>
              <motion.li initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>✓ Local market expertise</motion.li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "15+", label: "Years in Business" },
            { value: "4", label: "Cities Across Gujarat" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white shadow-lg rounded-lg py-10"
            >
              <h3 className="text-4xl font-bold text-yellow-600">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
          >
            Unlike typical brokers, we provide end-to-end support including legal verification,
            price negotiation, and after-sale service.
          </motion.p>
        </div>
      </section>

    </div>
    </PageTransition>
  );
}
