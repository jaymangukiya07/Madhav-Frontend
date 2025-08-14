import React from "react";

const newsData = [
  {
    id: 1,
    title: "New Luxury Villas Launching Soon",
    date: "Aug 8, 2025",
    desc: "Madhav Realty is set to launch premium villas in Surat with modern amenities.",
    image: "./currentnews1.jpg",
  },
  {
    id: 2,
    title: "Ongoing Project Near Completion",
    date: "July 28, 2025",
    desc: "Our Madhav villa Project is in its final stage, ready for possession by December.",
    image: "currentnews2.jpg",
  },
];

export default function CurrentNewsPreview() {
  return (
    <section className="py-12 px-6 md:px-20 bg-amber-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        <span className="text-gray-800 tracking-widest">COMING </span>
        <span className="text-orange-600 tracking-widest">SOON</span>
      </h2>

      {/* News grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Image with zoom effect */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-140 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Info box */}
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 shadow-lg transition-all duration-500 group-hover:bg-yellow-50">
              <p className="text-sm text-gray-500">
                {news.category} - {news.date}
              </p>
              <h3 className="text-lg font-light text-yellow-700 mt-1 transition-colors duration-300 group-hover:text-yellow-900">
                {news.title}
              </h3>
              <p className="text-gray-600 mt-2">{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
