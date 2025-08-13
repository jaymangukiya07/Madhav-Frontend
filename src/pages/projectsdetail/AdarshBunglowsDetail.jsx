// src/pages/AdarshBunglowsDetail.jsx
import { FaMapMarkerAlt, FaDownload, FaCheckCircle,FaPhoneAlt } from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

export default function AdarshBunglowsDetail() {
  return (
    <PageTransition>
    <div className="bg-white text-gray-800 mt-40">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-100 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">
            Adarsh Bunglows
          </h1>
          <p className="text-lg max-w-2xl">
            Experience luxurious living at Adarsh Bunglows — a premium
            collection of spacious and elegant homes, designed for comfort,
            privacy, and a lifestyle that blends modern amenities with serene
            surroundings.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mb-10 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Adarsh Bunglows offers an exclusive range of beautifully crafted
          bungalows with thoughtfully designed layouts and lush landscaped
          surroundings. Every home is built to provide ample space, natural
          light, and ventilation while maintaining the privacy you deserve.
        </p>
      </section>

      {/* Amenities */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">✨ Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> Children’s Play Area</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> Landscaped Garden</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> Vastu-Compliant Design</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> Gymnasium</li>
            </ul>
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 24/7 CCTV Surveillance</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> Animated kitchen</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> Ample Parking Space</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> High Quality Flooring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sizes & Pricing */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">📏 Sizes & Pricing</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-yellow-100">
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Home Size</th>
                <th className="px-4 py-2 border">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">GroundFloor</td>
                <td className="px-4 py-2 border">22x40</td>
                <td className="px-4 py-2 border">On Request</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">GroundFloor + 1</td>
                <td className="px-4 py-2 border">22x40</td>
                <td className="px-4 py-2 border">On Request</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">GroundFloor</td>
                <td className="px-4 py-2 border">20x40</td>
                <td className="px-4 py-2 border">On Request</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">GroundFloor + 1</td>
                <td className="px-4 py-2 border">20x40</td>
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
            <li><FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> Close to Educational Institutions</li>
            <li><FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" />  Close to Hospitals & Healthcare Centers</li>
            <li><FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> Nearby Shopping Malls & Markets</li>
            <li><FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> Easy Access to Highways & Public Transport</li>
            <li><FaMapMarkerAlt className="inline-block text-yellow-600 mr-2" /> Peaceful Residential Neighborhood</li>
          </ul>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="text-center py-12 flex flex-col items-center gap-4">
        <a
          href="/brochures/adarsh-bunglows-brochure.pdf"
          download
          className="inline-flex items-center  hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          <FaDownload className="mr-2" /> Download Brochure
        </a>
        <a
          href="https://maps.app.goo.gl/1ikwuCQjrsA29Pni9"
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
