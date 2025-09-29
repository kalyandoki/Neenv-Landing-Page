// import React from "react";

// const AboutUs = () => {
//   return (
//     <section
//       id="about"
//       className="py-24 bg-gradient-to-br from-gray-900 to-black"
//     >
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ffc107] tracking-tight">
//             About Us
//           </h2>
//           <div className="w-28 h-1.5 bg-[#ffc107] mx-auto rounded-full"></div>
//           <p className="mt-4 text-[#6c757d] max-w-2xl mx-auto text-lg">
//             Shaping the future of civil services education
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               {/* Left Content */}
//               <div>
//                 {/* Vision Header */}
//                 <div className="flex items-center mb-6">
//                   <div className="w-16 h-0.5 bg-[#ffc107] mr-4"></div>
//                   <h3 className="text-3xl font-bold text-[#ffc107]">
//                     Our Vision
//                   </h3>
//                 </div>
//                 <p className="text-lg text-[#f8f9fa] mb-8 leading-relaxed">
//                   Neenv IAS addresses the twin challenges of UPSC preparation:{" "}
//                   <strong>quality</strong> and <strong>affordability</strong>.
//                   We provide the best faculty and comprehensive courses to guide
//                   aspirants toward success.
//                 </p>

//                 {/* Feature Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl border border-gray-700 hover:border-[#ffc107] transition-all duration-300">
//                     <div className="text-[#ffc107] text-3xl mb-3">
//                       <i className="fas fa-chalkboard-teacher"></i>
//                     </div>
//                     <h4 className="text-xl font-semibold text-[#f8f9fa] mb-2">
//                       Expert Faculty
//                     </h4>
//                     <p className="text-[#6c757d]">
//                       Learn from experienced educators and civil servants.
//                     </p>
//                   </div>
//                   <div className="bg-gray-800 bg-opacity-40 p-6 rounded-2xl border border-gray-700 hover:border-[#ffc107] transition-all duration-300">
//                     <div className="text-[#ffc107] text-3xl mb-3">
//                       <i className="fas fa-book-open"></i>
//                     </div>
//                     <h4 className="text-xl font-semibold text-[#f8f9fa] mb-2">
//                       Comprehensive Material
//                     </h4>
//                     <p className="text-[#6c757d]">
//                       Well-researched and updated study resources.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Vision Circle */}
//               <div className="flex justify-center relative">
//                 <div className="absolute -inset-6 bg-[#ffc107] rounded-full opacity-20 blur-xl animate-pulse"></div>
//                 <div className="w-64 h-64 rounded-full border-4 border-[#ffc107] flex items-center justify-center relative shadow-inner">
//                   <div className="w-56 h-56 rounded-full bg-[#198754] bg-opacity-10 flex items-center justify-center">
//                     <div className="w-48 h-48 rounded-full bg-gray-800 flex items-center justify-center">
//                       <div className="text-center p-4">
//                         <i className="fas fa-graduation-cap text-5xl text-[#ffc107] mb-3"></i>
//                         <p className="text-[#ffc107] font-bold text-xl">
//                           Excellence
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mission Section */}
//             <div className="mt-20 pt-12 border-t border-gray-800">
//               <div className="flex items-center mb-6">
//                 <div className="w-16 h-0.5 bg-[#ffc107] mr-4"></div>
//                 <h3 className="text-3xl font-bold text-[#ffc107]">
//                   Our Mission
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="bg-gray-800 bg-opacity-40 p-8 rounded-2xl border border-gray-700">
//                   <p className="text-[#f8f9fa] text-lg leading-relaxed">
//                     To provide affordable, high-quality education to every UPSC
//                     aspirant, regardless of their background.
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 bg-opacity-40 p-8 rounded-2xl border border-gray-700">
//                   <p className="text-[#f8f9fa] text-lg leading-relaxed">
//                     We believe that with the right guidance and resources, every
//                     dedicated student can achieve their dream of becoming a
//                     civil servant.
//                   </p>
//                 </div>
//               </div>

//               {/* Call-to-Action Button */}
//               <div className="mt-12 flex justify-center">
//                 <button className="px-8 py-3 bg-[#ffc107] text-gray-900 font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
//                   Learn More About Our Approach
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

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
    // <section id="about" className="py-24 bg-white relative overflow-hidden">
    //   {/* Background decorations */}
    //   <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    //     <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#ffc107] opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#2ECC40] opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-[#ffc107] opacity-5 blur-3xl animate-pulse-slow"></div>

    //     {/* Grid pattern overlay */}
    //     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNnY2SDB6bTYgMGg2djZINnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNNiA2aDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNMTIgMTJoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC06ek0xOCAxOGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-5"></div>
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     {/* Section Header */}
    //     <div className="text-center mb-20">
    //       <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] rounded-full mb-6 shadow-lg">
    //         <span className="text-white font-bold tracking-wider">
    //           OUR STORY
    //         </span>
    //       </div>
    //       <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
    //         About{" "}
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#2ECC40]">
    //           Us
    //         </span>
    //       </h2>
    //       <div className="w-40 h-1.5 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] mx-auto rounded-full mb-8 shadow-lg shadow-[#ffc107]/30"></div>
    //       <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
    //         Shaping the future of civil services education
    //       </p>
    //     </div>

    //     <div className="max-w-6xl mx-auto">
    //       <div
    //         className="py-24 relative overflow-hidden p-10 text-[#ffffff] rounded-3xl border border-gray-200 shadow-2xl"
    //         style={{
    //           background: "linear-gradient(180deg, #254979 0%, #358D55 100%)",
    //         }}
    //       >
    //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    //           {/* Left Content */}
    //           <div>
    //             {/* Vision Header */}
    //             <div className="flex items-center mb-8">
    //               <div className="w-16 h-0.5 bg-gradient-to-r from-[#ffc107] to-[#e0a800] mr-4"></div>
    //               <h3 className="text-3xl font-bold text-gray-800">
    //                 Our{" "}
    //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800]">
    //                   Vision
    //                 </span>
    //               </h3>
    //             </div>
    //             <p className="text-lg text-[#ffffff] mb-10 leading-relaxed">
    //               Neenv IAS addresses the twin challenges of UPSC preparation:{" "}
    //               <span className="text-[#ffc107] font-bold">quality</span> and{" "}
    //               <span className="text-[#2ECC40] font-bold">
    //                 affordability
    //               </span>
    //               . We provide the best faculty and comprehensive courses to
    //               guide aspirants toward success.
    //             </p>

    //             {/* Feature Cards */}
    //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    //               <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#ffc107]/50 transition-all duration-300 group shadow-sm">
    //                 <div className="w-12 h-12 rounded-full bg-[#ffc107]/20 flex items-center justify-center mb-4 group-hover:bg-[#ffc107]/30 transition-colors">
    //                   <FaChalkboardTeacher className="text-[#ffc107] text-xl" />
    //                 </div>
    //                 <h4 className="text-xl font-semibold text-gray-800 mb-2">
    //                   Expert Faculty
    //                 </h4>
    //                 <p className="text-gray-600">
    //                   Learn from experienced educators and civil servants.
    //                 </p>
    //               </div>
    //               <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#2ECC40]/50 transition-all duration-300 group shadow-sm">
    //                 <div className="w-12 h-12 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mb-4 group-hover:bg-[#2ECC40]/30 transition-colors">
    //                   <FaBookOpen className="text-[#2ECC40] text-xl" />
    //                 </div>
    //                 <h4 className="text-xl font-semibold text-gray-800 mb-2">
    //                   Comprehensive Material
    //                 </h4>
    //                 <p className="text-gray-600">
    //                   Well-researched and updated study resources.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Right Vision Circle */}
    //           <div className="flex justify-center relative">
    //             <div className="absolute -inset-8 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] rounded-full opacity-20 blur-xl animate-pulse"></div>
    //             <div className="w-72 h-72 rounded-full border-4 border-gradient-to-r from-[#ffc107] to-[#2ECC40] flex items-center justify-center relative shadow-inner">
    //               <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#198754]/10 to-[#198754]/5 flex items-center justify-center">
    //                 <div className="w-56 h-56 rounded-full bg-white flex items-center justify-center shadow-lg">
    //                   <div className="text-center p-4">
    //                     <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ffc107] to-[#e0a800] flex items-center justify-center mx-auto mb-4">
    //                       <FaGraduationCap className="text-white text-3xl" />
    //                     </div>
    //                     <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800] font-bold text-xl">
    //                       Excellence
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Mission Section */}
    //         <div className="mt-24 pt-12 border-t border-gray-200">
    //           <div className="flex items-center mb-8">
    //             <div className="w-16 h-0.5 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] mr-4"></div>
    //             <h3 className="text-3xl font-bold text-gray-800">
    //               Our{" "}
    //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#2ECC40]">
    //                 Mission
    //               </span>
    //             </h3>
    //           </div>
    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //             <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#ffc107]/50 transition-all duration-300 shadow-sm">
    //               <div className="flex items-start mb-4">
    //                 <div className="w-10 h-10 rounded-full bg-[#ffc107]/20 flex items-center justify-center mr-4">
    //                   <FaHandHoldingHeart className="text-[#ffc107]" />
    //                 </div>
    //                 <p className="text-gray-700 text-lg leading-relaxed">
    //                   To provide affordable, high-quality education to every
    //                   UPSC aspirant, regardless of their background.
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#2ECC40]/50 transition-all duration-300 shadow-sm">
    //               <div className="flex items-start mb-4">
    //                 <div className="w-10 h-10 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mr-4">
    //                   <FaLightbulb className="text-[#2ECC40]" />
    //                 </div>
    //                 <p className="text-gray-700 text-lg leading-relaxed">
    //                   We believe that with the right guidance and resources,
    //                   every dedicated student can achieve their dream of
    //                   becoming a civil servant.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //           {/* Call-to-Action Button */}
    //           <div className="mt-16 flex justify-center">
    //             <button className="px-8 py-4 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
    //               <span>Learn More About Our Approach</span>
    //               <FaArrowRight className="ml-2" />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-16 left-16 w-72 h-72 rounded-full bg-[#ffc107] opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-16 right-16 w-[28rem] h-[28rem] rounded-full bg-[#2ECC40] opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-[#ffc107] rounded-full mb-6 shadow-md">
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
                  <div className="w-16 h-0.5 bg-[#ffc107] mr-4"></div>
                  <h3 className="text-3xl font-bold text-white">
                    Our <span className="text-[#ffc107]">Vision</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-100 mb-10 leading-relaxed">
                  Neenv IAS addresses the twin challenges of UPSC preparation:{" "}
                  <span className="text-[#ffc107] font-semibold">quality</span>{" "}
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
                    <div className="w-12 h-12 rounded-full bg-[#ffc107]/20 flex items-center justify-center mb-4">
                      <FaChalkboardTeacher className="text-[#ffc107] text-xl" />
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
                    <div className="w-16 h-16 rounded-full bg-[#ffc107] flex items-center justify-center mx-auto mb-4 shadow-md">
                      <FaGraduationCap className="text-white text-3xl" />
                    </div>
                    <p className="text-gray-800 font-bold text-xl">
                      Excellence
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="flex justify-center relative">
                {/* <div className="absolute -inset-6 bg-[#ffc107] rounded-full opacity-20 blur-xl animate-pulse"></div> */}

                <div className="w-64 h-64 rounded-full border-4 border-[#ffc107] flex items-center justify-center relative shadow-inner">
                  <div className="w-56 h-56 rounded-full bg-[#2ECC40] bg-opacity-10 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gray-800 flex items-center justify-center">
                      <div className="text-center p-4">
                        <i className="fas fa-graduation-cap text-5xl text-[#ffc107] mb-3"></i>

                        <p className="text-[#ffc107] font-bold text-xl">
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
                    <div className="w-10 h-10 rounded-full bg-[#ffc107]/20 flex items-center justify-center mr-4">
                      <FaHandHoldingHeart className="text-[#ffc107]" />
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
