import React from "react";
import PageTransition from "../components/PageTransition"; // Importing PageTransition component
import HeroSection from "../components/HeroSection";
import AboutPreview from "../homepreviewpages/Aboutpreview";
import OurProjectPreview from "../homepreviewpages/Ourprojectpreview";
//import ArjoMarjoPreview from "../homepreviewpages/ArjoMarjopreview"; // Importing Arjo-Marjo preview component
import ProjectCountPreview from "../homepreviewpages/Projectcountpreview"; // Importing ProjectCountPreview component
import CurrentNewsPreview from "../homepreviewpages/Currentnewspreview"; // Importing CurrentNewsPreview component
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <PageTransition>
    <div className="w-full mt-23">
      <HeroSection />
      <AboutPreview />
      <OurProjectPreview />
      <ProjectCountPreview />
      <CurrentNewsPreview />



      {/* Arjo-Marjo Section */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        <span className="text-gray-800">Arjo - Marjo </span>
        <span className="text-orange-600 tracking-widest">Service</span>
      </h2>
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src="./arjo-marjo.jpg"
              alt="Arjo-Marjo Service"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">આરજો - મારજો સેવા</h2>
            <p className="text-gray-700 mb-4">
              તમારી જૂની મિલકત અમને આપો અને અમારા પ્રોજેક્ટમાં તમારું નવું સપનાનું
              ઘર મેળવો. સરળ પ્રક્રિયા, પારદર્શક સોદો અને સમયસર હેન્ડઓવર સાથે
              ઘર બદલવાનો શ્રેષ્ઠ અનુભવ.
            </p>
            
           <Link to="/arjo-marjo-preview" className="text-[#B29F7E] font-semibold hover:underline">
              વધુ જાણો
            </Link>
          </div>
        </div>
      </section>

      
    </div>
    </PageTransition>
  );
}
