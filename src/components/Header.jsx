import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
// import NeevnLogo from "../assets/images/logo Nee.jpg";
import NeevnLogo from "../assets/images/Neenv-IAS.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-95 backdrop-blur-sm py-3 shadow-xl border-b border-gray-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center group"
              onClick={() => setActiveLink("hero")}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] rounded-full opacity-30 blur-md group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={NeevnLogo}
                  alt="Neenv IAS Logo"
                  className="w-16 h-16 md:w-16 md:h-16 object-contain relative z-10"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <nav className="flex items-center space-x-1">
              {[
                { name: "Home", to: "hero" },
                { name: "About Us", to: "about" },
                { name: "Courses", to: "courses" },
                { name: "Testimonials", to: "testimonials" },
                { name: "Contact Us", to: "contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={80}
                  onSetActive={() => handleSetActive(item.to)}
                  onClick={closeMenu}
                  className={`px-4 py-3 font-medium md:text-lg transition-all duration-300 flex items-center cursor-pointer ${
                    activeLink === item.to
                      ? "text-white  border-b-2 border-[#D4A017]"
                      : "text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
                  }`}
                >
                  <span className="flex-1">{item.name}</span>
                  {/* {activeLink === item.to && (
                    <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#2ECC40]"></span>
                  )} */}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="https://wa.me/919734548688"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#2ECC40] text-gray-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-[#2ECC40]" />
            ) : (
              <FaBars className="text-4xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden mt-4 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 py-4">
            {[
              { name: "Home", to: "hero" },
              { name: "About Us", to: "about" },
              { name: "Courses", to: "courses" },
              { name: "Testimonials", to: "testimonials" },
              { name: "Contact Us", to: "contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => handleSetActive(item.to)}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  activeLink === item.to
                    ? "text-white bg-gradient-to-r from-[#D4A017]/20 to-[#2ECC40]/20 border-l-4 border-[#D4A017]"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span className="flex-1">{item.name}</span>
                {activeLink === item.to && (
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#2ECC40]"></span>
                )}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <a
              href="https://wa.me/919734548688"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] text-gray-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
