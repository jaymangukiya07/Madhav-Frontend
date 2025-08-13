// src/pages/Shree RamParkDetail.jsx
import { FaMapMarkerAlt, FaDownload, FaCheckCircle } from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

export default function ShreeRamParkDetail() {
  return (
    <PageTransition>
    <div className="bg-white text-gray-800 mt-40">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-100 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">
           Shree Ram Park
          </h1>
          <p className="text-lg max-w-2xl">
            Shree Ram Park is a modern industrial hub designed for
            manufacturing units, warehouses, and business operations — offering
            premium infrastructure and connectivity for enterprises to grow.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mb-10 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Strategically located with excellent transport links, Shree Ram Park
          Industrial is the ideal base for businesses seeking efficiency
          and scalability. Featuring wide internal roads, reliable utilities,
          and state-of-the-art facilities, it caters to industries of all sizes
          — from light manufacturing to large-scale production.
        </p>
      </section>

      {/* Amenities */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">🏭 Amenities & Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                Wide 60ft & 40ft Internal Roads
              </li>
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                24/7 Power Supply & Backup
              </li>
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                High-Capacity Water Connection
              </li>
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                Industrial-Grade Drainage System
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                Security with CCTV Monitoring
              </li>
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                Fire Safety & Emergency Access
              </li>
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                Dedicated Parking for Trucks
              </li>
              <li>
                <FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 
                Green Buffer Zones
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sizes & Pricing */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">📏 Plot Sizes & Pricing</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Plot Size</th>
                <th className="px-4 py-2 border">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Industrial Plot</td>
                <td className="px-4 py-2 border">17X105</td>
                <td className="px-4 py-2 border">On Request</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Industrial Plot</td>
                <td className="px-4 py-2 border">1500 sq. yards</td>
                <td className="px-4 py-2 border">On Request</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Industrial Plot</td>
                <td className="px-4 py-2 border">5000 sq. ft.</td>
                <td className="px-4 py-2 border">On Request</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">📍 Location Advantages</h2>
          <ul className="space-y-2">
            <li>
              <FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> 
              Easy access to National Highway
            </li>
            <li>
              <FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> 
              Close to Major Industrial Corridors
            </li>
            <li>
              <FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> 
              Proximity to Railway Freight Terminals
            </li>
            <li>
              <FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> 
              Quick connectivity to City Center
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 flex flex-col items-center gap-4">
        <a
          href="/brochures/ram-park-brochure.pdf"
          download
          className="inline-flex items-center  hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          <FaDownload className="mr-2" /> Download Brochure
        </a>
        <a
          href="https://maps.app.goo.gl/MuzagWK6WLu6wUPfA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  text-white px-5 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <FaMapMarkerAlt /> View Location
        </a>
      </section>
    </div>
    </PageTransition>

  );
}
