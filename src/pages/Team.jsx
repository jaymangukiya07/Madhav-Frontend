import React from "react";
import PageTransition from "../components/PageTransition";

const teamMembers = [
  {
    name: "Praful Bhai Kaswala",
    role: "Managing Director 🏛️ ",
    experience:
      "14+ years of leadership and financial expertise in real estate, guiding overall company strategy, driving growth, managing budgets, investments, and ensuring smooth daily operations.",
    image: "./prafulbhai.jpg",
    bg: "bg-yellow-50",
  },
  {
    name: "Bharat Bhai Sutariya",
    role: "Sales & Marketing Director 📈",
    experience:
      "15+ years in real estate marketing and sales, building strong client networks and driving high-value property deals.",
    image: "./bharatbhai.jpg",
    bg: "bg-orange-50",
  },
  {
    name: "Satish Bhai Jodhani",
    role: "Sales & Marketing Director 📈",
    experience:
      "12+ years in strategic sales, brand building, and expanding customer reach in the premium property market.",
    image: "./satishbhai.jpg",
    bg: "bg-gray-50",
  },
  {
    name: "Ashvinbhai Bhai Mangukiya",
    role: "Project Manager",
    experience:
      "10+ years of expertise in supervising construction projects, ensuring quality standards and on-time completion. also sales and marketing experience.",
    image: "./ashvinbhai.jpg",
    bg: "bg-blue-50",
  },
  {
    name: "Jatin Bhai Sutariya",
    role: "Finance Director 💰",
    experience:
      "10+ years managing company accounts, handling budgets, tracking expenses, managing payroll, overseeing investments, and ensuring accurate financial reporting.",
    image: "./priyaben.jpg",
    bg: "bg-green-50",
  },
  {
    name: "Mahendra Bhai Kaswala",
    role: "Project Manager",
    experience:
      "Skilled in managing on-site operations, coordinating with contractors, and delivering projects efficiently.",
    image: "./mahendrahbhai.jpg",
    bg: "bg-purple-50",
  },
];

export default function Team() {
  return (
    <PageTransition>
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-center my-12 mt-40">
        Meet Our <span className="text-orange-600">Team</span>
      </h2>

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`py-16 px-6 md:px-20 ${
            member.bg
              ? member.bg
              : ""
          }`}
          style={
            member.bgImage
              ? {
                  backgroundImage: `${member.bgImage}`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}
          }
        >
          <div
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <img
            src={member.image}
            alt={member.name}
            className="w-80 h-100 object-cover rounded-3xl border-4 border-orange-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)] transform hover:scale-105 hover:rotate-1 transition-all duration-500 ease-in-out"
            />

            </div>

            {/* Text */}
            <div className="flex-1 bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-yellow-700">{member.name}</h3>
              <p className="text-gray-500 italic">{member.role}</p>
              <p className="mt-4 text-gray-700 leading-relaxed">{member.experience}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
    </PageTransition>
  );
}
