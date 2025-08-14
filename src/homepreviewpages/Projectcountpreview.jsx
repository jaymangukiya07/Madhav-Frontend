// src/homepreviewpages/Projectcountpreview.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectCountPreview() {
  const counters = [
    { title: "Upcoming Projects", target: 10, color: "text-blue-600" },
    { title: "Ongoing Projects", target: 12, color: "text-orange-600" },
    { title: "Completed Projects", target: 60, color: "text-green-600" },
    { title: "happy Clients", target: 500, color: "text-purple-600" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));
  const [started, setStarted] = useState(false);

  // Intersection Observer to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.3, // 30% of section visible
  });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);

      counters.forEach((counter, index) => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = current;
            return updated;
          });

          if (current >= counter.target) {
            clearInterval(timer);
          }
        }, 0.05); // Adjust speed of counting
      });
    }
  }, [inView, started]);

  return (
    <div ref={ref} className="bg-gray-50 py-12">
         <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center md:text-left">
            Projects <span className="text-orange-500">Count</span>
          </h2>
          </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: started ? 1 : 0, y: started ? 0 : 30 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h2 className={`text-4xl font-bold mb-2 ${counter.color}`}>
              {counts[index]+ "+"}
            </h2>
            <p className="text-gray-700 font-medium">{counter.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
