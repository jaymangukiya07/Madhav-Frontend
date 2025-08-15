import React, { useState } from "react";

export default function Gallery({ media }) {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {media.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery media ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              ) : (
                <div className="relative w-full h-60 bg-black flex items-center justify-center">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <div className="relative max-w-4xl w-full">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt="Selected"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              )}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-black bg-red-500 hover:bg-red-600 rounded-full p-2"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
