// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Services from "./pages/Services";
import OurProjects from "./pages/OurProjects";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";  
import JeviDetail from "./pages/projectsdetail/JevivillaDetail"; // Importing JeviDetail component
import MadhavvilaDetail from "./pages/projectsdetail/MadhavvilaDetail"; 
import AshirvadvilaDetail from "./pages/projectsdetail/AshirvadvilaDetail"; // Importing AshirvadvilaDetail component
import AshirvadGloryDetail from "./pages/projectsdetail/AshirvadGloryDetail"; // Importing AshirvadGloryDetail component
import NidhivanByGirirajDetail from "./pages/projectsdetail/NidhivanByGirirajDetail";
import AdarshBunglowsDetail from "./pages/projectsdetail/AdarshBunglowsDetail";
import AnantaGloryDetail from "./pages/projectsdetail/AnantaGloryDetail";
import SavitakunjHomesDetail from "./pages/projectsdetail/SavitakunjHomesDetail";
import ShivBunglowsDetail from "./pages/projectsdetail/ShivBunglowsDetail";
import ShreegiHomesDetail from "./pages/projectsdetail/ShreegiHomesDetail"; // Importing ShreegiHomesDetail component
import MadhavDreamsDetail from "./pages/projectsdetail/MadhavDreamsDetail";
import ShreeRamParkDetail from "./pages/projectsdetail/ShreeRamParkDetail"; // Importing ShreeRamParkDetail component
import ArjoMarjoPreview from "./homepreviewpages/ArjoMarjoPreview"; // Importing Arjo-Marjo preview component
import Footer from "./components/Footer"; // Importing Footer component
import { ProjectsProvider } from "./context/ProjectsContext"; // Importing ProjectsProvider



export default function App() {
  return (
    <ProjectsProvider>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/projects/jevivilla" element={<JeviDetail />} /> {/* Route for JeviDetail */}
        <Route path="/projects/madhavvila" element={<MadhavvilaDetail />} /> {/* Route for MadhavDetail */}
        <Route path="/projects/ashirvadvila" element={<AshirvadvilaDetail />} /> {/* Route for AshirvadvilaDetail */}
        <Route path="/projects/ashirvadglory" element={<AshirvadGloryDetail />} /> {/* Route for AshirvadGloryDetail */}
        <Route path="/projects/nidhivanbygiriraj" element={<NidhivanByGirirajDetail />} /> {/* Route for NidhivanByGirirajDetail */}
        <Route path="/projects/adarshbunglowse" element={<AdarshBunglowsDetail />} /> {/* Route for AdarshBunglowsDetail */}
        <Route path="/projects/anantaglory" element={<AnantaGloryDetail />} /> {/* Route for AnantaGloryDetail */}
        <Route path="/projects/savitakunjhomes" element={<SavitakunjHomesDetail />} /> {/* Route for SavitakunjHomesDetail */}
        <Route path="/projects/shivbunglows" element={<ShivBunglowsDetail />} /> {/* Route for ShivBunglowsDetail */}
        <Route path="/projects/shreegihomes" element={<ShreegiHomesDetail />} /> {/* Route for ShreegiHomesDetail */}
        <Route path="/projects/madhavdreams" element={<MadhavDreamsDetail />} /> {/* Route for MadhavDreamsDetail */}
        <Route path="/projects/shreerampark" element={<ShreeRamParkDetail />} /> {/* Route for ShreeRamParkDetail */}
        <Route path ="/arjo-marjo-preview" element={<ArjoMarjoPreview />} /> {/* Route for Arjo-Marjo preview component */}

        

        
        {/* Add more project detail routes as needed */}
        {/* Example: <Route path="/projects/project-name" element={<ProjectDetail />} /> */}
        
        {/* Add more project detail routes as needed */}
        {/* Example: <Route path="/projects/project-name" element={<ProjectDetail />} /> */}
        
        {/* Add more project detail routes as needed */}
        {/* Example: <Route path="/projects/project-name" element={<ProjectDetail />} /> */}

        
        {/* Add more project detail routes as needed */}
        {/* Example: <Route path="/projects/project-name" element={<ProjectDetail />} /> */}
        {/* Add more project detail routes as needed */}
        
        

        {/* Add more project detail routes as needed */}




      </Routes>
      <Footer /> {/* Adding Footer component */}
      
    </BrowserRouter>
  </ProjectsProvider>
    
  );
}   