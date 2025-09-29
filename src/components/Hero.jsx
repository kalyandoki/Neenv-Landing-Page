import React from "react";
import { Link } from "react-scroll";
import {
  FaChevronDown,
  FaGraduationCap,
  FaStar,
  FaBook,
  FaUsers,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-900/80 z-10"></div>

      {/* Brand gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/10 to-[#2ECC40]/10 z-10"></div>

      {/* Floating circles */}
      <div className="absolute top-16 left-4 w-12 h-12 rounded-full bg-[#D4A017] opacity-20 blur-xl animate-pulse-slow z-10"></div>
      <div className="absolute bottom-16 right-4 w-20 h-20 rounded-full bg-[#2ECC40] opacity-20 blur-xl animate-pulse-slow z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-10 h-10 rounded-full bg-[#D4A017] opacity-10 blur-xl animate-pulse-slow z-10"></div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#D4A017]">
            Quality Education
          </span>{" "}
          for UPSC Aspirants
        </h1>

        {/* Subheading */}
        <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 px-2 sm:px-0">
          Solving the twin challenges of UPSC preparation:{" "}
          <span className="text-[#D4A017] font-semibold">Quality</span> and{" "}
          <span className="text-[#2ECC40] font-semibold">Affordability</span>
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full text-sm sm:text-base">
            <div className="w-8 h-8 rounded-full bg-[#D4A017]/20 flex items-center justify-center mr-2 sm:mr-3">
              <FaStar className="text-[#D4A017]" />
            </div>
            Expert Faculty
          </div>
          <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full text-sm sm:text-base">
            <div className="w-8 h-8 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mr-2 sm:mr-3">
              <FaBook className="text-[#2ECC40]" />
            </div>
            Comprehensive Material
          </div>
          <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full text-sm sm:text-base">
            <div className="w-8 h-8 rounded-full bg-[#D4A017]/20 flex items-center justify-center mr-2 sm:mr-3">
              <FaUsers className="text-[#D4A017]" />
            </div>
            Personalized Guidance
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="group bg-gradient-to-r from-[#D4A017] to-[#D4A017] text-black px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Explore Courses
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="flex flex-col items-center text-[#D4A017] cursor-pointer group"
        >
          <span className="text-xs sm:text-sm mb-1 opacity-80 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <FaChevronDown className="text-lg sm:text-xl animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
