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
    // <section
    //   id="hero"
    //   className="relative min-h-screen flex items-center justify-center overflow-hidden"
    // >
    //   {/* Background image */}
    //   <div
    //     className="absolute inset-0 bg-center bg-cover z-0"
    //     style={{
    //       backgroundImage:
    //         "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
    //     }}
    //   ></div>

    //   {/* Dark overlay to make text more readable */}
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900/80 z-10"></div>

    //   {/* Subtle gradient overlay for brand colors */}
    //   <div className="absolute inset-0 bg-gradient-to-r from-[#ffc107]/5 to-[#2ECC40]/5 z-10"></div>

    //   {/* Grid pattern overlay */}
    //   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNnY2SDB6bTYgMGg2djZINnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNNiA2aDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNMTIgMTJoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC06ek0xOCAxOGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-10 z-10"></div>

    //   {/* Floating elements */}
    //   <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#ffc107] opacity-20 blur-xl z-10 animate-pulse-slow"></div>
    //   <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#2ECC40] opacity-20 blur-xl z-10 animate-pulse-slow"></div>
    //   <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-[#ffc107] opacity-10 blur-xl z-10 animate-pulse-slow"></div>

    //   <div className="container mx-auto px-4 relative z-20">
    //     <div className="max-w-5xl mx-auto">
    //       {/* Badge */}
    //       {/* <div className="flex justify-center mb-6">
    //         <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#ffc107]/20 to-[#2ECC40]/20 rounded-full backdrop-blur-sm border border-[#ffc107]/30">
    //           <span className="text-[#ffc107] font-semibold flex items-center">
    //             <FaGraduationCap className="mr-2" />
    //             EXCELLENCE IN EDUCATION
    //           </span>
    //         </div>
    //       </div> */}

    //       {/* Main heading */}
    //       <div className="flex justify-center mb-6">
    //         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center">
    //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800]">
    //             Quality Education
    //           </span>{" "}
    //           for UPSC Aspirants
    //         </h1>
    //       </div>

    //       {/* Subheading */}
    //       <div className="flex justify-center mb-12">
    //         <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed text-center">
    //           Solving the twin challenges of the UPSC segment:
    //           <span className="text-[#ffc107] font-semibold"> quality </span>
    //           and
    //           <span className="text-[#2ECC40] font-semibold">
    //             {" "}
    //             affordability
    //           </span>
    //         </p>
    //       </div>

    //       {/* Feature highlights */}
    //       <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
    //         <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
    //           <div className="w-10 h-10 rounded-full bg-[#ffc107]/20 flex items-center justify-center mr-3">
    //             <FaStar className="text-[#ffc107]" />
    //           </div>
    //           <span>Expert Faculty</span>
    //         </div>
    //         <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
    //           <div className="w-10 h-10 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mr-3">
    //             <FaBook className="text-[#2ECC40]" />
    //           </div>
    //           <span>Comprehensive Material</span>
    //         </div>
    //         <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
    //           <div className="w-10 h-10 rounded-full bg-[#ffc107]/20 flex items-center justify-center mr-3">
    //             <FaUsers className="text-[#ffc107]" />
    //           </div>
    //           <span>Personalized Guidance</span>
    //         </div>
    //       </div>

    //       {/* CTA Buttons */}
    //       <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
    //         <Link
    //           to="courses"
    //           spy={true}
    //           smooth={true}
    //           duration={500}
    //           className="group bg-gradient-to-r from-[#ffc107] to-[#e0a800] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center"
    //         >
    //           <span>Explore Courses</span>
    //           <svg
    //             className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M14 5l7 7m0 0l-7 7m7-7H3"
    //             ></path>
    //           </svg>
    //         </Link>
    //         <Link
    //           to="about"
    //           spy={true}
    //           smooth={true}
    //           duration={500}
    //           className="group border-2 border-gradient-to-r from-[#ffc107] to-[#2ECC40] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-[#ffc107] hover:to-[#2ECC40] hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center"
    //         >
    //           <span>Learn More</span>
    //           <svg
    //             className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //             ></path>
    //           </svg>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Scroll indicator */}
    //   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
    //     <Link
    //       to="about"
    //       spy={true}
    //       smooth={true}
    //       duration={500}
    //       className="flex flex-col items-center text-[#ffc107] cursor-pointer group"
    //     >
    //       <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
    //         Scroll Down
    //       </span>
    //       <FaChevronDown className="text-xl animate-bounce" />
    //     </Link>
    //   </div>
    // </section>

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
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffc107]/10 to-[#2ECC40]/10 z-10"></div>

      {/* Floating circles */}
      <div className="absolute top-16 left-4 w-12 h-12 rounded-full bg-[#ffc107] opacity-20 blur-xl animate-pulse-slow z-10"></div>
      <div className="absolute bottom-16 right-4 w-20 h-20 rounded-full bg-[#2ECC40] opacity-20 blur-xl animate-pulse-slow z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-10 h-10 rounded-full bg-[#ffc107] opacity-10 blur-xl animate-pulse-slow z-10"></div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800]">
            Quality Education
          </span>{" "}
          for UPSC Aspirants
        </h1>

        {/* Subheading */}
        <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 px-2 sm:px-0">
          Solving the twin challenges of UPSC preparation:{" "}
          <span className="text-[#ffc107] font-semibold">quality</span> and{" "}
          <span className="text-[#2ECC40] font-semibold">affordability</span>
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <div className="flex items-center text-gray-300 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full text-sm sm:text-base">
            <div className="w-8 h-8 rounded-full bg-[#ffc107]/20 flex items-center justify-center mr-2 sm:mr-3">
              <FaStar className="text-[#ffc107]" />
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
            <div className="w-8 h-8 rounded-full bg-[#ffc107]/20 flex items-center justify-center mr-2 sm:mr-3">
              <FaUsers className="text-[#ffc107]" />
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
            className="group bg-gradient-to-r from-[#ffc107] to-[#e0a800] text-black px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
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

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="group border-2 border-[#ffc107] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gradient-to-r hover:from-[#ffc107] hover:to-[#2ECC40] hover:text-black transition-all duration-300 flex items-center justify-center"
          >
            Learn More
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
          className="flex flex-col items-center text-[#ffc107] cursor-pointer group"
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
