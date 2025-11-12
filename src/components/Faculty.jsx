import React from "react";
import { FaBriefcase, FaInstagram, FaYoutube } from "react-icons/fa";
import img1 from "../assets/images/as-sir1.png";
import img2 from "../assets/images/ravi-sir1.png";
import img3 from "../assets/images/sm-sir1.png";
import img4 from "../assets/images/meghraj.png";
import img5 from "../assets/images/rajdeep.png";
import img6 from "../assets/images/kritti.png";
import { FaXTwitter } from "react-icons/fa6";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Aman Soni",
      subjects: "Economy, Current Affairs",
      experience: "13 Years",
      image: img2,
      twitterUrl: "https://x.com/amansoni0907?t=UbljtlnD-pEOo98l9Zxxaw&s=09",
      youtubeUrl:
        "https://youtube.com/playlist?list=PLsL82bR4GX4yxkO_H5orTADxfqm9ghVyG&si=aZP-Py7fKjD2lFpA",
      instagramUrl:
        "https://www.instagram.com/amansoni0907?igsh=NmNhMndpZXBuZ2Jv",
      tags: ["Economics Expert", "Current Affairs Specialist"],
      details:
        "Faculty at Shubhra Ranjan IAS Delhi, ALS IAS Delhi, La Ex Hyderabad",
    },
    {
      name: "Ravi Pathak",
      subjects: "Polity, Current Affairs, Pub Ad Optional",
      experience: "20 Years",
      image: img1,
      twitterUrl: "https://x.com/RaviPathak65142?t=6kSYeAuZkXGwoVw98O6U9A&s=08",
      // youtubeUrl: "",
      instagramUrl:
        "https://www.instagram.com/ravipathak27?igsh=MXB3emh0Z20xdDFmZg==",
      tags: ["Polity Expert", "Public Administration"],
      details: "Faculty at IIT Bombay Alumnus, Ex-Drishti IAS, Ex-Raus IAS",
    },
    {
      name: "Sandeep Mahajan",
      subjects: "PSIR",
      experience: "15 Years",
      image: img3,
      // twitterUrl: "",
      // youtubeUrl: "",
      // instagramUrl: "",
      tags: ["PSIR Specialist"],
      details: "Faculty at La Ex Hyderabad, AKS IAS Hyderabad, Ex-Byjus",
    },
    {
      name: "Meghraj",
      subjects: "History",
      experience: "7 years",
      image: img4, // replace with correct image variable
      // twitterUrl: "",
      // youtubeUrl: "",
      // instagramUrl: "",
      tags: ["History Specialist"],
      details: "Faculty at Shubhra Ranjan IAS, Forum IAS, StudyIQ, Sankalp IAS",
    },
    {
      name: "Rajdeep Chandrakar",
      subjects: "Geography, Environment, Sci Tech",
      experience: "5 years",
      image: img5, // replace with correct image variable
      // twitterUrl: "",
      // youtubeUrl: "",
      // instagramUrl: "",
      tags: ["Geography Specialist"],
      details: "Faculty at Abhimanu IAS Chandigarh, Ex-ALS IAS Delhi",
    },
    {
      name: "Krittika",
      subjects: "Social Issues and Justice, Ethics",
      experience: "3 years", // add years if you have it
      image: img6, // replace with correct image variable
      // twitterUrl: "",
      // youtubeUrl: "",
      // instagramUrl: "",
      tags: ["Ethics & Social Issues Specialist"],
      details: "Faculty at Ambition IAS, Zenstudy",
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
              <div className="relative h-136 overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-100 bg-[#ffffff]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">
                    {faculty.name}
                  </h3>
                  <p className="text-[#D4A017]/90 text-sm">
                    {faculty.subjects}
                  </p>
                  <p className="text-[#ffffff] text-xs mt-1">
                    {faculty.details}
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
                    <a
                      href={faculty.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#000000] hover:bg-[#000] hover:text-white transition"
                    >
                      <FaXTwitter size={22} />
                    </a>
                    <a
                      href={faculty.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition"
                    >
                      <FaInstagram size={22} />
                    </a>
                    <a
                      href={faculty.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition"
                    >
                      <FaYoutube size={22} />
                    </a>
                  </div>
                </div>

                {/* Tags */}
                {faculty.tags && (
                  <div className="flex flex-wrap gap-2">
                    {faculty.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#2ECC40] text-[#ffffff] px-3 py-1 rounded-full text-xs font-medium border border-[#0dcaf0]/20"
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
