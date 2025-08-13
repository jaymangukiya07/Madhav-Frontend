import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    
    { name: "About", path: "/about" },
    { name: "Vision", path: "/vision" },
    { name: "Services", path: "/services" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Team", path: "/team" }, // Added Team link
    { name: "Testimonials", path: "/testimonials" }, // Added Testimonials link
  ];


  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b border-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-2 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
        <img
          src="/logo1.png"
          alt="Madhav Reality Logo"
          className="w-20 h-20 rounded-8xl object-cover "  
        />
          <div className="text-3xl font-extrabold text-amber-500"></div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-white font-bold text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-amber-400 transition duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-2 text-white bg-[#1e2a55] shadow-lg rounded-b-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block py-2 border-b border-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
