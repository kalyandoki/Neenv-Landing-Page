import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-16 left-16 w-72 h-72 rounded-full bg-[#D4A017] opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-16 right-16 w-[28rem] h-[28rem] rounded-full bg-[#2ECC40] opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-[#D4A017] rounded-full mb-6 shadow-md">
            <span className="text-white font-bold tracking-wider">
              OUR STORY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            About <span className="text-[#2ECC40]">Us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Shaping the future of civil services education
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            className="py-20 px-10 relative overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #254979 0%, #358D55 100%)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-0.5 bg-[#D4A017] mr-4"></div>
                  <h3 className="text-3xl font-bold text-white">
                    Our <span className="text-[#D4A017]">Vision</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-100 mb-10 leading-relaxed">
                  Neenv IAS addresses the twin challenges of UPSC preparation:{" "}
                  <span className="text-[#D4A017] font-semibold">quality</span>{" "}
                  and{" "}
                  <span className="text-[#2ECC40] font-semibold">
                    affordability
                  </span>
                  . We provide the best faculty and comprehensive courses to
                  guide aspirants toward success.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#D4A017]/20 flex items-center justify-center mb-4">
                      <FaChalkboardTeacher className="text-[#D4A017] text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Expert Faculty
                    </h4>
                    <p className="text-gray-600">
                      Learn from experienced educators and civil servants.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mb-4">
                      <FaBookOpen className="text-[#2ECC40] text-xl" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Comprehensive Material
                    </h4>
                    <p className="text-gray-600">
                      Well-researched and updated study resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Vision Circle */}
              {/* <div className="flex justify-center relative">
                <div className="absolute -inset-10 bg-[] rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center shadow-xl">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center mx-auto mb-4 shadow-md">
                      <FaGraduationCap className="text-white text-3xl" />
                    </div>
                    <p className="text-gray-800 font-bold text-xl">
                      Excellence
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="flex justify-center relative">
                {/* <div className="absolute -inset-6 bg-[#D4A017] rounded-full opacity-20 blur-xl animate-pulse"></div> */}

                <div className="w-64 h-64 rounded-full border-4 border-[#D4A017] flex items-center justify-center relative shadow-inner">
                  <div className="w-56 h-56 rounded-full bg-[#2ECC40] bg-opacity-10 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gray-800 flex items-center justify-center">
                      <div className="text-center p-4">
                        <i className="fas fa-graduation-cap text-5xl text-[#D4A017] mb-3"></i>

                        <p className="text-[#D4A017] font-bold text-xl">
                          Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-16 h-0.5 bg-[#2ECC40] mr-4"></div>
                <h3 className="text-3xl font-bold text-white">
                  Our <span className="text-[#2ECC40]">Mission</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4A017]/20 flex items-center justify-center mr-4">
                      <FaHandHoldingHeart className="text-[#D4A017]" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      To provide affordable, high-quality education to every
                      UPSC aspirant, regardless of their background.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mr-4">
                      <FaLightbulb className="text-[#2ECC40]" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We believe that with the right guidance and resources,
                      every dedicated student can achieve their dream of
                      becoming a civil servant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="mt-16 flex justify-center">
                <button className="px-8 py-4 bg-[#2ECC40] text-white font-bold rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center">
                  <span>Learn More About Our Approach</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
