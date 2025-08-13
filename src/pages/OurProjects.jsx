import { useProjects } from "../context/ProjectsContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";


const projectsData = [
  { id: 1, title: "Jevivilla", img: "/jevivilla.jpg", slug: "jevivilla" },
  { id: 2, title: "Madhav villa", img: "/madhavvila.jpg", slug: "madhavvila" },
  { id: 3, title: "Ashirvad villa", img: "/ashirvadvila.jpg", slug: "ashirvadvila" },
  { id: 4, title: "Ashirvadglory", img: "/ashirvadglory.jpg", slug: "ashirvadglory" },
  { id: 5, title: "Nidhivan By Giriraj", img: "/nidhivanbygiriraj.jpg", slug: "nidhivanbygiriraj" },
  { id: 6, title: "Adarsh Bunglowse", img: "/adarshbunglowse.jpg", slug: "adarshbunglowse" },
  { id: 7, title: "Ananta glory", img: "/anantaglory.jpg", slug: "anantaglory" },
  { id: 8, title: "Savita Kunj Homes", img: "/savitakunjhomes.jpg", slug: "savitakunjhomes" },
  { id: 9, title: "Shree Ram Park", img: "/shreerampark.jpg", slug: "shreerampark" },
  { id: 10, title: "Shiv Bunglows", img: "/shivbunglowse.jpg", slug: "shivbunglows" },
  { id: 11, title: "Shreegi Homes", img: "/shreegihomes.jpg", slug: "shreegihomes" },
  { id: 12, title: "Madhav dreams", img: "/madhavdreams.jpg", slug: "madhavdreams" },
];

export default function OurProjects() {
  const { visibleCount, setVisibleCount } = useProjects();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <PageTransition>
    <section className="py-16 bg-white mt-40" id="our-projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our <span className="text-orange-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {projectsData.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Link to={`/projects/${project.slug}`}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-97 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
                    {project.title}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < projectsData.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-white text-orange-600 font-medium rounded-lg border-amber-600 hover:bg-orange-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
    </PageTransition>
  );
}
