import React from "react";
import "./Testimonials.css";
import PageTransition from "../components/PageTransition"; // Importing PageTransition component

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Patel",
      role: "Villa Owner, Surat",
      text: "Madhav Realty made my dream home a reality. Exceptional service, transparent process, and world-class quality.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Mehta",
      role: "Bungalow Buyer, Vadodara",
      text: "The attention to detail and luxurious finishes exceeded my expectations. Truly the best real estate experience.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikas Sharma",
      role: "Investor, Ahmedabad",
      text: "Professional, trustworthy, and highly recommended. My investment with Madhav Realty has grown significantly.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Priya Desai",
      role: "Apartment Owner, Rajkot",
      text: "From start to finish, the team was supportive and attentive. I love my new home!",
      img: "https://randomuser.me/api/portraits"
    },
    {
      name: "Anil Kumar",
      role: "Commercial Property Owner, Gandhinagar",
      text: "Madhav Realty's expertise in commercial real estate is unmatched. They helped me find the perfect location for my business.",
      img: "https://randomuser.me/api/portraits"
    },
    {
      name: "Rina Shah",
      role: "Luxury Home Buyer, Bhavnagar",
      text: "The quality and design of my new home are simply stunning. Madhav Realty truly understands luxury living.",
      img: "https://randomuser.me/api/portraits"
    },
  ];

  return (
    <PageTransition>
    <div className="testimonials-section pt-20 mt-40">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 gradient-text">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">
          Real stories from our happy clients — building trust one home at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="image-wrapper">
                <img src={t.img} alt={t.name} className="testimonial-img" />
              </div>
              <p className="testimonial-text">“{t.text}”</p>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
