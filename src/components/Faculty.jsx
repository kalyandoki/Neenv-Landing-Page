// import React from "react";

// const Faculty = () => {
//   const facultyMembers = [
//     {
//       name: "Aman Soni",
//       subjects: "Economy, Current Affairs",
//       experience: "13 years",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//       name: "Ravi Pathak",
//       subjects: "Polity, Current Affairs, Pub Ad Optional",
//       experience: "",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     },
//     {
//       name: "Sandeep Mahajan",
//       subjects: "PSIR Mentorship",
//       experience: "15 years",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#D4A017] opacity-10 blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0dcaf0] opacity-10 blur-3xl animate-pulse-slow"></div>
//         <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-[#ff4d6d] opacity-5 blur-3xl animate-pulse-slow"></div>

//         {/* Grid pattern overlay */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNnY2SDB6bTYgMGg2djZINnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNNiA2aDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNMTIgMTJoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02ek0xOCAxOGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#e0a800] rounded-full mb-6 shadow-lg">
//             <span className="text-gray-900 font-bold tracking-wider">
//               MEET OUR EXPERTS
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#e0a800]">
//               Distinguished
//             </span>{" "}
//             Faculty
//           </h2>
//           <div className="w-40 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#e0a800] mx-auto rounded-full mb-8 shadow-lg shadow-[#D4A017]/30"></div>
//           <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
//             Learn from the best minds in the field with years of experience
//             guiding UPSC aspirants to success.
//           </p>
//         </div>

//         {/* Faculty Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {facultyMembers.map((faculty, index) => (
//             <div
//               key={index}
//               className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-700 relative"
//             >
//               {/* Faculty Image with overlay effect */}
//               <div className="relative h-80 overflow-hidden">
//                 <div
//                   className="h-full w-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url('${faculty.image}')` }}
//                 ></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

//                 {/* Faculty name and subjects overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-end">
//                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A017] to-[#e0a800] flex items-center justify-center mr-4 shadow-lg">
//                       <i className="fas fa-user text-white text-xl"></i>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-white">
//                         {faculty.name}
//                       </h3>
//                       <p className="text-[#D4A017]/80">{faculty.subjects}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Faculty Info */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   {faculty.experience && (
//                     <div className="flex items-center bg-gray-700/50 backdrop-blur-sm px-4 py-2 rounded-xl">
//                       <div className="w-8 h-8 rounded-full bg-[#198754]/20 flex items-center justify-center mr-2">
//                         <i className="fas fa-briefcase text-[#198754]"></i>
//                       </div>
//                       <span className="text-white font-medium">
//                         {faculty.experience} Years
//                       </span>
//                     </div>
//                   )}
//                   <div className="flex space-x-3">
//                     <button className="w-10 h-10 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4A017] hover:text-gray-900 transition-all duration-300">
//                       <i className="fab fa-linkedin-in"></i>
//                     </button>
//                     <button className="w-10 h-10 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4A017] hover:text-gray-900 transition-all duration-300">
//                       <i className="fas fa-envelope"></i>
//                     </button>
//                   </div>
//                 </div>

//                 {/* Optional Tags */}
//                 {faculty.tags && (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {faculty.tags.map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gradient-to-r from-[#0dcaf0]/20 to-[#0dcaf0]/10 text-[#0dcaf0] px-4 py-2 rounded-full text-sm font-medium border border-[#0dcaf0]/20"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {/* View Profile Button */}
//                 <button className="mt-6 w-full py-3 bg-gradient-to-r from-[#D4A017] to-[#e0a800] text-gray-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center">
//                   <span>View Full Profile</span>
//                   <i className="fas fa-arrow-right ml-2"></i>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="mt-24 text-center">
//           <div className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-2xl border border-gray-700 relative overflow-hidden">
//             {/* Glow effect */}
//             <div className="absolute top-0 left-0 w-full h-full bg-[#D4A017] opacity-5 blur-3xl"></div>

//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Join Our Team of Educators
//               </h3>
//               <p className="text-gray-300 mb-8 text-lg">
//                 We're always looking for passionate educators to join our
//                 mission.
//               </p>
//               <button className="px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#e0a800] text-gray-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
//                 <span>Explore Opportunities</span>
//                 <i className="fas fa-arrow-right ml-2"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faculty;

import React from "react";
import { FaBriefcase, FaInstagram, FaYoutube } from "react-icons/fa";
import img1 from "../assets/images/AS-sir.jpg";
import img2 from "../assets/images/ravi-sir.jpg";
import img3 from "../assets/images/sm-sir.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Aman Soni",
      subjects: "Economy, Current Affairs",
      experience: "13 Years Experience",
      image: img2,
      tags: ["Economics Expert", "Current Affairs Specialist"],
    },
    {
      name: "Ravi Pathak",
      subjects: "Polity, Current Affairs, Pub Ad Optional",
      experience: "20 Years Experience",
      image: img1,
      tags: ["Polity Expert", "Public Administration"],
    },
    {
      name: "Sandeep Mahajan",
      subjects: "PSIR",
      experience: "15 Years Experience",
      image: img3,
      tags: ["PSIR Specialist"],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Floating circles */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4A017] opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0dcaf0] opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-[#ff4d6d] opacity-10 blur-3xl animate-pulse"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#e0a800] rounded-full mb-6 shadow-lg">
            <span className="text-gray-900 font-semibold tracking-widest text-sm">
              MEET OUR EXPERTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#D4A017] to-[#e0a800] bg-clip-text text-transparent">
              Distinguished
            </span>{" "}
            Faculty
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Learn from the best mentors with years of experience guiding UPSC
            aspirants toward success.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-2xl border border-gray-700/40 bg-gray-800/30 backdrop-blur-md transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[#D4A017]/40"
            >
              {/* Image */}
              <div className="relative h-130 overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">
                    {faculty.name}
                  </h3>
                  <p className="text-[#D4A017]/90 text-sm">
                    {faculty.subjects}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  {faculty.experience && (
                    <div className="flex items-center bg-gray-700/50 px-4 py-2 rounded-xl">
                      <FaBriefcase className="text-[#D4A017] mr-2" />
                      <span className="text-white font-medium">
                        {faculty.experience}
                      </span>
                    </div>
                  )}
                  <div className="flex space-x-3">
                    <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition">
                      <FaYoutube size={22} />
                    </a>
                    <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition">
                      <FaInstagram size={22} />
                    </a>
                  </div>
                </div>

                {/* Tags */}
                {faculty.tags && (
                  <div className="flex flex-wrap gap-2">
                    {faculty.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#0dcaf0]/10 text-[#0dcaf0] px-3 py-1 rounded-full text-xs font-medium border border-[#0dcaf0]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
