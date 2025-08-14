import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // Assuming you have a CSS file for styling
export default function Footer() {
  return (
    <footer className="relative bg-[#251C64] text-white mt-10">
      {/* Curved top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
        >
          <path
            fill="#fff"
            d="M0,0L80,10.7C160,21,320,43,480,53.3C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0V80H0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Text */}
          <div className="max-w-lg mb-8 lg:mb-0">
            <h3 className="text-2xl font-medium leading-snug">
              MOVE INTO THE MAJESTIC MARVEL WITH <br /> ABSOLUTE EXCLUSIVITY
            </h3>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-sm">
              Location : Nidhivan by Giriraj <br />
              opposite Nidhivan chowkdi, near J V villa, Kamrej, Gujarat 394185 <br />
              
              
            </p>
            <p className="mt-3 text-sm">
              📞 +91 9979231280 / +91 9586640380
              <br />
             
            </p>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Link</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:underline">
                 Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:underline">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:underline">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Ongoing Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Ongoing Projects</h4>
            <ul className="space-y-1 text-sm">
              <li>→ Nidhivan by Giriraj</li>
              <li>→ Madhav dreams</li>
              <li>→ J.V Villa</li>
              <li>→ Madhav Villa</li>
              <li>→ Ashirvad Villa</li>
              <li>→ Ashirvad Glory</li>
              <li>→ Ananta Glory</li>
              <li>→ Shree Ram Park</li>
              <li>→ Shiv Bunglows</li>
              <li>→ Shreegi Homes</li>
              <li>→ Adarsh Bunglows</li>
              <li>→ Savita Kunj Homes</li>
              
            </ul>
          </div>

          {/* Completed Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Completed Projects</h4>
            <ul className="space-y-1 text-sm">
              <li>→ Ashirvad Green Palace</li>
              <li>→ Ananta Homes</li>
              <li>→ Amar Recidency</li>
              <li>→ Sahjanand Recidency</li>
              <li>→ Giriraj Homes</li>
              <li>→ Krishna Villa</li>
              <li>→ Patel Nagar</li>
              <li>→ swarn Bhumi Residency</li>
            </ul>
          </div>
        </div>
      </div>
        {/* Bottom Bar */}
        <div className="bg-[#1A1450] text-center py-4">
            <p className="text-sm">
                © 2024 Madhav Reality. All rights reserved. |{" "}
                <a
                href="https://www.madhavreality.com/privacy-policy"
                className="underline hover:text-gray-300"
                >
                Privacy Policy
                </a>
            </p>
            {/* Social Media Links */}
            <div className="mt-2  flex items-center justify-center">
              <a
                href="https://www.facebook.com/profile.php?id=61573998360476"
                className="text-white hover:text-gray-300 mx-2"
              >
                 <FaFacebookF /> Facebook
              </a>
              <a
                href="https://www.instagram.com/madhav.reality/"
                className="text-white hover:text-gray-300 mx-2"
              >
                <FaInstagram />   Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/madhavreality"
                className="text-white hover:text-gray-300 mx-2"
              >
               <FaLinkedinIn /> LinkedIn
              </a>
                <a
                    href="https://www.twitter.com/madhavreality"
                    className="text-white hover:text-gray-300 mx-2"
                >
                  <FaTwitter />  Twitter
                </a>
                </div>
                    

        </div>
      
      {/* WhatsApp Button */}
         <a
        href="https://wa.me/918347957742?text=Hello%20Madhav%20Realty,%20I%20am%20interested%20in%20your%20properties." // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        
      >
        <FaWhatsapp size={28} />
      </a>

    </footer>
  );
}
