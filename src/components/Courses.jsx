import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaBook,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Disha GS Mentorship Program",
      category: "gs",
      price: "₹2000/month",
      duration: "Starting Date: 13th October, 2025",
      faculty: "",
      features: [
        "1-1 Mentorship sessions and personalized study plans.",
        "Subject specific and personalized strategy in guidance of Subject Expert Faculty.",
        "Weekly twice, 1-1 sessions with Lead Mentor for maintaining discipline and motivation.",
        "Regular doubt clearing sessions with Subject Expert Faculty.",
        "Weekly Pre and Mains Tests with evaluation and discussion.",
        "Sectional and FLTs.",
        "Weekly Current Affairs classes.",
        "Value addition classes on most difficult topics.",
        "Value Addition Content (Toppers' copies, Data, Committee Recommendations).",
      ],
    },
    {
      id: 2,
      title: "IPP (Intensive Prelims Practice)",
      category: "gs",
      price: "₹500/month",
      duration: "Starting Date: 13th October, 2025",
      faculty: "",
      features: [
        "Daily Study Targets + Recommended sources for each target.",
        "Daily MCQ test of 50 ques , followed by detailed discussion on each question.",
        "Revision of one subject at a time.",
      ],
    },
    {
      id: 3,
      title: "DAP (Daily Answer Writing Practice)",
      category: "gs",
      price: "₹1000/month",
      duration: "Starting Date: 13th October, 2025",
      faculty: "",
      features: [
        "Daily Study Targets + Recommended sources for each target.",
        "Daily Answer Writing Program.",
        "5 questions will be given daily.",
        "2 questions will be evaluated and feedback given on the same day.",
        "All 5 questions will be discussed the same day through online session.",
        "Model Answers given in point form for quick revision.",
      ],
    },
    {
      id: 4,
      title: "Polity GS Module",
      category: "gs",
      price: "₹4999/-",
      duration: "Starting Date: 13 October, 2025",

      faculty: "Ravi Pathak",
      features: [
        "Discussion of Complete Polity and Governance from Pre and Mains perspective.",
        "Discussion of Pre and Mains PYQs along with the chapters.",
        "150-160 hours of class.",
        "The most comprehensive Polity and Governance course available ever.",
      ],
    },
    {
      id: 5,
      title: "Economy GS Module",
      category: "gs",
      price: "₹4999/-",
      duration: "Starting Date: 13th October, 2025",
      faculty: "Aman Soni",
      features: [
        "Discussion of complete Economy from Pre and Mains perspective.",
        "Discussion of Pre and Mains PYQs along with the chapters.",
        "140 hours of class.",
        "The most comprehensive Economy Course available.",
      ],
    },
    {
      id: 6,
      title: "Optional Mentorship",
      category: "optional",
      price: "₹1999/-",
      duration: "Oct 13, 2025 - Jan 20, 2026",
      faculty: "Subject Experts",
      subjects: "Pub Ad, PSIR, Geography",
      features: [
        "Daily Study Targets + recommended sources for each target.",
        "Daily Answer Writing Practice.",
        "Two questions will be given daily for practice. Out of these two, one ques will be evaluated. Both answers to be discussed after 7 days.",
        "Sectional Test of 10 ques. Will be evaluated and discussed.",
        "2 FLT of each paper.",
      ],
    },
    {
      id: 7,
      title: "Current Affairs Program",
      category: "current",
      price: "₹4999/-",
      duration: "11 Oct, 2025 - 15 Aug, 2026",
      faculty: "Ravi Pathak and Aman Soni",
      features: [
        "Coverage of Topics from Jan 2025 - July 2026.",
        "4 hours of live class on Saturday and Sunday each (Total 8 hours class per week).",
        "Program will be run in three phases.",
        "Phase 1: 11th Oct 2025 - 1st Feb, 2026: Discussion of Contemporary Issues (Topics in news for the last 3-4 years).",
        "Phase 2: 15 Feb, 2026 - 10 May, 2026: Discussion of only Prelims 2026 relevant topics.",
        "Phase 3: 11th Oct 2025 - 9 August, 2026: Discussion of only Mains 2026 relevant Topics.",
      ],
    },
    {
      id: 8,
      title: "GS Prelims Comprehensive Course",
      category: "gs",
      price: "₹5000/-",
      duration: "Starting Date: 26 December, 2025",

      faculty: "",
      features: [
        "Daily 5 hours of classes (8:00–10:30 AM and 11:00–1:30 PM).",
        "Total duration of classes: 310 hours.",
        "Batch end date: First week of March.",
        "Validity of course till Prelims 2026.",
        "Online live classes (recordings available if class is missed).",
        "Monthly Current Affairs notes and classes.",
        "Daily and Weekly Tests.",
        "1-1 Mentorship for doubt clearance, strategy, and performance evaluation.",
        "Full syllabus test after completion of each subject.",
        "Prelims Test Series + GS Mentorship.",
      ],
    },
    {
      id: 9,
      title: "GS Foundation Course",
      category: "gs",
      price: "₹18000/-",
      duration: "Starting Date: 29 December, 2025",

      faculty: "",
      features: [
        "Daily 5 hours of classes (8:00–10:30 AM and 11:00–1:30 PM).",
        "Total duration of classes: 900 hours.",
        "Batch end date: First week of August.",
        "Validity of course: 1 year.",
        "Online live classes (recordings available if class is missed).",
        "Monthly Current Affairs Notes.",
        "Weekly Tests for both Prelims and Mains.",
        "1-1 Mentorship for doubt clearance, strategy, and performance evaluation.",
        "Full syllabus test after completion of each subject.",
        "Prelims Test Series + Mains Test Series + GS Mentorship + Current Affairs classes (till August 2027).",
      ],
    },

    // {
    //   id: 8,
    //   title: "GS Mentorship",
    //   category: "gs",
    //   price: "0 Rupees (Free of Cost)",
    //   duration: "",
    //   faculty: "Ravi Pathak and Aman Soni",
    //   features: [
    //     "Mentorship from basic to advance",
    //     "Complete coverage of NCERT",
    //     "Practice questions from PYQs",
    //     "Answer Writing Development Program",
    //     "Interview Guidance Program",
    //   ],
    // },
  ];

  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    // <section
    //   id="courses"
    //   className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
    // >
    //   {/* Animated background elements */}
    //   <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    //     <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#D4A017] opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#2ECC40] opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-[#D4A017] opacity-5 blur-3xl animate-pulse-slow"></div>

    //     {/* Grid pattern overlay */}
    //     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNnY2SDB6bTYgMGg2djZINnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNNiA2aDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNMTIgMTJoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC06ek0xOCAxOGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-10"></div>
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     {/* Section Header */}
    //     <div className="text-center mb-20">
    //       <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] rounded-full mb-6 shadow-lg">
    //         <span className="text-white font-bold tracking-wider">
    //           EDUCATIONAL PROGRAMS
    //         </span>
    //       </div>
    //       <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
    //         Our{" "}
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#2ECC40]">
    //           Premium
    //         </span>{" "}
    //         Courses
    //       </h2>
    //       <div className="w-40 h-1.5 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] mx-auto rounded-full mb-8 shadow-lg shadow-[#D4A017]/30"></div>
    //       <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
    //         Comprehensive courses designed to help you excel in UPSC
    //         examinations with expert guidance and structured learning.
    //       </p>
    //     </div>

    //     {/* Tabs */}
    //     <div className="flex flex-wrap justify-center mb-20 gap-4">
    //       {["all", "gs", "optional", "current"].map((tab) => (
    //         <button
    //           key={tab}
    //           onClick={() => setActiveTab(tab)}
    //           className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
    //             activeTab === tab
    //               ? "bg-gradient-to-r from-[#D4A017] to-[#2ECC40] text-white shadow-lg"
    //               : "bg-white text-gray-700 border border-gray-200 hover:border-[#D4A017] hover:text-[#D4A017] shadow-md"
    //           }`}
    //         >
    //           {tab === "all"
    //             ? "All Courses"
    //             : tab === "gs"
    //             ? "General Studies"
    //             : tab === "optional"
    //             ? "Optional"
    //             : "Current Affairs"}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Courses Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //       {filteredCourses.map((course) => (
    //         <div
    //           key={course.id}
    //           className="group bg-white rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-200 relative"
    //         >
    //           {/* Course Header */}
    //           <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
    //             <div className="flex justify-between items-start mb-4">
    //               <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#D4A017] transition-colors">
    //                 {course.title}
    //               </h3>
    //               <span className="bg-gradient-to-r from-[#D4A017] to-[#2ECC40] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
    //                 {course.price}
    //               </span>
    //             </div>

    //             {/* Duration & Faculty */}
    //             <div className="flex flex-wrap gap-4">
    //               {course.duration && (
    //                 <div className="flex items-center text-gray-600">
    //                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
    //                     <FaCalendarAlt className="text-[#D4A017]" />
    //                   </div>
    //                   <span>{course.duration}</span>
    //                 </div>
    //               )}
    //               {course.faculty && (
    //                 <div className="flex items-center text-gray-600">
    //                   <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
    //                     <FaChalkboardTeacher className="text-[#D4A017]" />
    //                   </div>
    //                   <span>{course.faculty}</span>
    //                 </div>
    //               )}
    //             </div>
    //           </div>

    //           {/* Course Body */}
    //           <div className="p-6">
    //             {/* Subjects */}
    //             {course.subjects && (
    //               <div className="mb-6">
    //                 <p className="text-gray-700 mb-3 font-bold flex items-center">
    //                   <FaBook className="text-[#D4A017] mr-2" />
    //                   Subjects:
    //                 </p>
    //                 <div className="flex flex-wrap gap-2">
    //                   {course.subjects.split(", ").map((subject, idx) => (
    //                     <span
    //                       key={idx}
    //                       className="bg-gradient-to-r from-[#2ECC40]/20 to-[#2ECC40]/10 text-[#2ECC40] px-4 py-2 rounded-full text-sm font-medium border border-[#2ECC40]/20"
    //                     >
    //                       {subject}
    //                     </span>
    //                   ))}
    //                 </div>
    //               </div>
    //             )}

    //             {/* Features */}
    //             <div className="mb-6">
    //               <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center">
    //                 <FaStar className="text-[#D4A017] mr-2" />
    //                 Course Features:
    //               </h4>
    //               <ul className="space-y-2">
    //                 {course.features.map((feature, index) => (
    //                   <li
    //                     key={index}
    //                     className="flex items-start text-gray-600"
    //                   >
    //                     <FaCheckCircle className="text-[#2ECC40] mt-1 mr-2" />
    //                     <span>{feature}</span>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>

    //             {/* Enroll Button */}
    //             <button className="w-full py-3 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center">
    //               <span>Enroll Now</span>
    //               <FaArrowRight className="ml-2" />
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Call to Action */}
    //     <div className="mt-24 text-center">
    //       <div className="inline-block bg-white backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-2xl border border-gray-200 relative overflow-hidden">
    //         {/* Glow effect */}
    //         <div className="absolute top-0 left-0 w-full h-full bg-[#D4A017] opacity-5 blur-3xl"></div>

    //         <div className="relative z-10">
    //           <h3 className="text-3xl font-bold text-gray-800 mb-4">
    //             Need Guidance Choosing the Right Course?
    //           </h3>
    //           <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
    //             Our academic counselors are here to help you select the perfect
    //             program based on your goals and preparation level.
    //           </p>
    //           <button className="px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
    //             <span>Talk to Our Counselor</span>
    //             <FaArrowRight className="ml-2" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      id="courses"
      className="py-24 bg-gray-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#D4A017] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#2ECC40] opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-[#D4A017] text-white rounded-full mb-6 shadow-md">
            <span className="font-semibold tracking-wide">
              EDUCATIONAL PROGRAMS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-[#D4A017]">Premium</span> Courses
          </h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-8 rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive courses designed to help you excel in UPSC
            examinations with expert guidance and structured learning.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {["all", "gs", "optional", "current"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#D4A017] text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-300 hover:text-[#D4A017]"
              }`}
            >
              {tab === "all"
                ? "All Courses"
                : tab === "gs"
                ? "General Studies"
                : tab === "optional"
                ? "Optional"
                : "Current Affairs"}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 transition-colors">
                    {course.title}
                  </h3>
                  <span className="bg-[#2ECC40] text-white px-3 py-1 rounded-full text-md font-bold shadow-sm text-center">
                    {course.price}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* {course.duration && (
                    <div className="flex items-center text-gray-600">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <FaCalendarAlt className="text-[#D4A017]" />
                      </div>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  )} */}
                  {course.faculty && (
                    <div className="flex items-center text-gray-600">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                        <FaChalkboardTeacher className="text-[#D4A017]" />
                      </div>
                      <span className="text-sm">{course.faculty}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Subjects */}
                {course.subjects && (
                  <div className="mb-6">
                    <p className="text-gray-800 mb-2 font-semibold flex items-center">
                      <FaBook className="text-[#D4A017] mr-2" />
                      Subjects:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.split(", ").map((subject, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-md font-bold mb-3 text-gray-900 flex items-center">
                    <FaStar className="text-[#D4A017] mr-2" />
                    Course Features:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-600"
                      >
                        <FaCheckCircle
                          size={14} // fixed size
                          className="text-[#2ECC40] mt-1 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <a
                  href="https://wa.me/919734548688"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-3 bg-[#D4A017] text-white font-semibold rounded-lg hover:shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center">
                    Enroll Now <FaArrowRight className="ml-2" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-10 max-w-2xl border border-gray-200 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Guidance Choosing the Right Course?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Our academic counselors are here to help you select the perfect
                program based on your goals and preparation level.
              </p>
              <a
                href="https://wa.me/919734548688"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-[#D4A017] text-white font-semibold rounded-lg hover:shadow-md hover:scale-105 transition-transform flex items-center justify-center mx-auto">
                  Talk to Our Counselor <FaArrowRight className="ml-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
