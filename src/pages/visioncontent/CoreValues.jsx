import { FaHeart, FaStar, FaClock, FaUserCheck, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const values = [
  {
    icon: <FaHeart className="text-red-500 text-5xl mb-4" />,
    title: "Customer Delight",
    desc: "At Madhav Realty, we believe buying a home is more than a transaction — it’s a life milestone. Our mission is to turn that milestone into a joyful, stress-free experience. We go beyond meeting expectations; we create moments that leave a lasting smile.",
  },
  {
    icon: <FaStar className="text-red-500 text-5xl mb-4" />,
    title: "Excellence",
    desc: "At Madhav Realty, we are committed to excellence in every aspect of our work. From using premium-quality materials and innovative designs to ensuring attention to detail and timely delivery, we strive to exceed expectations. By continuously improving and embracing modern trends, we deliver homes that reflect unmatched quality, functionality, and lasting value.",
  },
  {
    icon: <FaClock className="text-red-500 text-5xl mb-4" />,
    title: "Punctuality",
    desc: "At Madhav Realty, we value our clients’ time as much as we value our own. From project planning to final handover, we adhere strictly to timelines without compromising on quality. Our commitment to punctuality ensures that every promise is delivered on schedule, building trust and confidence in every transaction.",
  },
  {
    icon: <FaUserCheck className="text-red-500 text-5xl mb-4" />,
    title: "Commitment & Accountability",
    desc: "At Madhav Realty, we take full ownership of every project and every promise we make. Our commitment drives us to deliver the highest standards of quality, while our accountability ensures transparency, honesty, and responsibility at every stage. We stand by our work, our timelines, and our word — building trust that lasts well beyond the sale.",
  },
  {
    icon: <FaHandshake className="text-red-500 text-5xl mb-4" />,
    title: "Relationship",
    desc: "At Madhav Realty, we believe real estate is not just about buildings, but about people. We focus on building lasting relationships with our clients, partners, and communities through trust, respect, and open communication. Our goal is to be a lifelong partner in our clients’ property journeys, long after the deal is done.",
  },
  {
    icon: <FaChalkboardTeacher className="text-red-500 text-5xl mb-4" />,
    title: "Learning",
    desc: "At Madhav Realty, we believe continuous learning is the key to growth and innovation. We stay updated with the latest market trends, technologies, and design practices to serve our clients better. By embracing new ideas and improving our skills, we ensure our projects remain modern, efficient, and aligned with evolving customer needs.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Core <span className="text-orange-600">Values</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
