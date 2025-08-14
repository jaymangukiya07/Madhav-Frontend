import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function OurProjectPreview() {
  const projects = [
    {
      img: "./jevivilla.jpg",
      title: "જેવી વિલા",
      desc: "A brief description of the project highlighting its unique features and design.",
      link: "/projects/jevivilla",
    },
    {
      img: "./madhavvila.jpg",
      title: "માધવ વિલા",
      desc: "A brief description of the project highlighting its unique features and design.",
      link: "/projects/madhavvila",
    },
    {
      img: "./ashirvadvila.jpg",
      title: "આશીર્વાદ વિલા",
      desc: "A brief description of the project highlighting its unique features and design.",
      link: "/projects/ashirvadvila",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-orange-500">Projects</span>
        </motion.h2>

        {/* Section Description */}
        <motion.p
          className="text-gray-700 text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore our portfolio of premium residential villas and bungalows, crafted with precision and innovation.
        </motion.p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto sm:h-64 md:h-72 object-cover"
              />
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">{project.desc}</p>
                <Link
                  to={project.link}
                  className="mt-4 text-blue-600 text-sm sm:text-base hover:underline"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="bg-white text-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold border-2 border-orange-600 transition duration-300 shadow-md hover:bg-orange-100 hover:shadow-lg inline-flex items-center justify-center gap-2"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
