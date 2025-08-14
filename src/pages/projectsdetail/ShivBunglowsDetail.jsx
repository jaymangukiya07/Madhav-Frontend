// src/pages/ShivBunglowsEDetail.jsx
import { FaMapMarkerAlt, FaDownload, FaCheckCircle } from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

export default function ShivBunglowsDetail() {
  return (
    <PageTransition>
    <div className="bg-white text-gray-800 mt-40">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-100 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">
            Shiv Bunglows
          </h1>
          <p className="text-lg max-w-2xl">
            Experience premium villa living at Shiv Bunglows, a luxurious
            residential enclave designed with elegance, comfort, and
            functionality in mind. Strategically located for convenience and
            enhanced lifestyle.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mb-10 container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Shiv Bunglows offers an exquisite blend of modern architecture and
          serene surroundings. With spacious layouts, premium materials, and
          thoughtful planning, every villa here is a testament to superior
          craftsmanship and luxurious living.
        </p>
      </section>

      {/* Amenities */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">✨ Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> ✨ Attractive Main Entry Gate</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 🌳 Landscaped Garden & Green Spaces</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 🚰 Underground Drainage Line </li>
              
            </ul>
            <ul className="space-y-2">
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 🛣️ RCC Concrete Roads</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 💡 Modern Street Lighting</li>
              <li><FaCheckCircle className="inline-block text-yellow-600 mr-2" /> 🧱 Strong Compound Wall Around Project</li>
              
            </ul>
          </div>
        </div>
      </section>

      {/* Sizes & Pricing */}
 <section className="container mx-auto px-4 py-12">
  <h2 className="text-2xl font-bold mb-4">📏 Sizes</h2>
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg shadow">
      <thead>
        <tr className="bg-yellow-100">
          <th className="px-4 py-2 border">Type</th>
          <th className="px-4 py-2 border">Home Size</th>
        </tr>
      </thead>
      <tbody>
        {[
          { type: "Ground Floor", size: "20x40" },
          { type: "Ground Floor + 1", size: "20x40" },
          { type: "Ground Floor", size: "19x39" },
          { type: "Ground Floor + 1", size: "19x39" },
          { type: "Ground Floor", size: "20x39" },
          { type: "Ground Floor + 1", size: "20x39" },
        
        ].map((item, index) => (
          <tr key={index} className="hover:bg-yellow-50">
            <td className="px-4 py-2 border">{item.type}</td>
            <td className="px-4 py-2 border font-semibold text-yellow-700">{item.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* For More Information Section */}
  <div className="text-center mt-6">
    <p className="text-lg font-medium text-gray-800 mb-3">
      📩 For More Information
    </p>
    <a
      href="https://wa.me/919067748005?text=Hello%20Madhav%20Reality%2C%20I%20want%20to%20inquire%20about%20Shiv%20Bunglows."
      target="_blank"
      rel="noopener noreferrer"
      className=" text-white px-5 py-2 rounded-lg text-lg  border-2 border-yellow-600  inline-flex items-center gap-2"
    >
      💬 WhatsApp Us
    </a>
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
          href="/brochures/shiv-bunglows-brochure.pdf"
          download
          className="inline-flex items-center hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all "
        >
          <FaDownload className="mr-2" /> Download Brochure
        </a>
        <a
          href="https://maps.app.goo.gl/dSGVmJ1AU6NPkf8H9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition "
        >
          <FaMapMarkerAlt /> View Location
        </a>
      </section>
    </div>
    </PageTransition>
  );
}
