import React from "react";
import aboutImage from "../assets/about-image.jpg"; // Replace with your actual image

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-700 mb-4">
            At <strong>Madhav Infra</strong>, we specialize in premium residential villas and bungalows.
            With 15+ years of experience, we bring clients’ dreams to life by combining modern design with trust and quality craftsmanship.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence ensures every project is crafted with precision, innovation, and unmatched service.
            Join us in building your dream home with a team that values integrity and client satisfaction above all.

            Experience the difference with Madhav Infra, where your vision becomes our mission to create exceptional living spaces.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={aboutImage}
              alt="Madhav Infra Office"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
