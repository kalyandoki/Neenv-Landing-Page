import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaPlay,
} from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "AIR-45, UPSC 2023",
      content:
        "Neenv IAS has been instrumental in my success. The faculty's guidance and the comprehensive study material helped me crack the exam in my first attempt. I'm especially grateful for the answer writing development program.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80",
      type: "image",
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "AIR-78, UPSC 2022",
      content:
        "The Current Affairs Program at Neenv IAS is exceptional. The phased approach helped me cover all relevant topics systematically. The faculty's insights on contemporary issues were invaluable for both prelims and mains.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=687&q=80",
      type: "image",
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "AIR-112, UPSC 2023",
      content:
        "I joined the Optional Mentorship program for PSIR and it transformed my preparation. The daily answer writing practice and personalized feedback helped me improve significantly. Highly recommend Neenv IAS!",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=687&q=80",
      type: "video",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    // <section
    //   id="testimonials"
    //   className="py-24 relative overflow-hidden"
    //   style={{
    //     background: "linear-gradient(180deg, #254979 0%, #358D55 100%)",
    //   }}
    // >
    //   {/* Background Decorations */}
    //   <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    //     <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white opacity-5 blur-3xl animate-pulse-slow"></div>

    //     {/* Grid pattern overlay */}
    //     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNnY2SDB6bTYgMGg2djZINnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNNiA2aDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNMTIgMTJoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC06ek0xOCAxOGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-10"></div>
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     {/* Section Header */}
    //     <div className="text-center mb-20">
    //       <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 shadow-lg">
    //         <span className="text-white font-bold tracking-wider">
    //           SUCCESS STORIES
    //         </span>
    //       </div>
    //       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
    //         Student{" "}
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
    //           Testimonials
    //         </span>
    //       </h2>
    //       <div className="w-40 h-1.5 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full mb-8 shadow-lg shadow-white/30"></div>
    //       <p className="mt-4 text-gray-100 max-w-2xl mx-auto text-lg">
    //         Hear from our successful candidates who have made it to the final
    //         list with our guidance.
    //       </p>
    //     </div>

    //     <div className="max-w-6xl mx-auto">
    //       <div className="relative">
    //         {/* Testimonial Card */}
    //         <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
    //           <div className="p-8 md:p-12">
    //             <div className="flex flex-col lg:flex-row items-center">
    //               {/* Left Side */}
    //               <div className="lg:w-2/5 mb-8 lg:mb-0 flex justify-center">
    //                 <div className="relative">
    //                   <div className="absolute -inset-4 bg-white rounded-full opacity-20 blur-xl"></div>
    //                   {testimonials[activeIndex].type === "image" ? (
    //                     <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
    //                       <img
    //                         src={testimonials[activeIndex].image}
    //                         alt={testimonials[activeIndex].name}
    //                         className="w-full h-full object-cover"
    //                       />
    //                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    //                     </div>
    //                   ) : (
    //                     <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
    //                       <div className="absolute inset-0 flex items-center justify-center">
    //                         <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
    //                           <FaPlay className="text-3xl text-white" />
    //                         </div>
    //                       </div>
    //                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center py-4">
    //                         <span className="font-bold">Video Testimonial</span>
    //                       </div>
    //                     </div>
    //                   )}
    //                 </div>
    //               </div>

    //               {/* Right Side */}
    //               <div className="lg:w-3/5 lg:pl-12">
    //                 <div className="mb-6">
    //                   <FaQuoteLeft className="text-4xl text-white opacity-70" />
    //                 </div>
    //                 <p className="text-xl text-gray-100 mb-8 italic leading-relaxed">
    //                   "{testimonials[activeIndex].content}"
    //                 </p>
    //                 <div className="flex items-center">
    //                   <div className="w-12 h-0.5 bg-gradient-to-r from-white to-gray-300 mr-4"></div>
    //                   <div>
    //                     <h4 className="text-2xl font-bold text-white">
    //                       {testimonials[activeIndex].name}
    //                     </h4>
    //                     <p className="text-white font-medium">
    //                       {testimonials[activeIndex].role}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Navigation Buttons */}
    //         <button
    //           onClick={prevTestimonial}
    //           className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 rounded-full flex items-center justify-center text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white hover:text-white transition-all duration-300 shadow-lg z-20"
    //         >
    //           <FaChevronLeft className="text-xl" />
    //         </button>

    //         <button
    //           onClick={nextTestimonial}
    //           className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 rounded-full flex items-center justify-center text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white hover:text-white transition-all duration-300 shadow-lg z-20"
    //         >
    //           <FaChevronRight className="text-xl" />
    //         </button>
    //       </div>

    //       {/* Dots */}
    //       <div className="flex justify-center mt-10 space-x-3">
    //         {testimonials.map((_, index) => (
    //           <button
    //             key={index}
    //             onClick={() => setActiveIndex(index)}
    //             className={`w-3 h-3 rounded-full transition-all duration-300 ${
    //               index === activeIndex ? "bg-white w-8" : "bg-white/50"
    //             }`}
    //           ></button>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #254979 0%, #358D55 100%)",
      }}
    >
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-yellow-400 opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-white opacity-5 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-black text-yellow-400 font-bold rounded-full mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Student <span className="text-yellow-400">Testimonials</span>
          </h2>
          <div className="w-40 h-1.5 bg-green-400 mx-auto rounded-full my-4"></div>
          <p className="text-gray-100 max-w-2xl mx-auto text-lg">
            Hear from our successful candidates who achieved their dreams with
            our guidance.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-black/70 border border-green-500/30 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-green-400/40">
            <div className="p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
              {/* Left Side: Image / Video */}
              <div className="lg:w-2/5 flex justify-center relative">
                <div className="absolute -inset-4 rounded-full bg-green-500/10 blur-xl"></div>
                {testimonials[activeIndex].type === "image" ? (
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl relative">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                ) : (
                  <div className="w-64 h-64 rounded-full bg-gray-800 border-4 border-yellow-400 shadow-xl flex items-center justify-center relative">
                    <FaPlay className="text-white text-4xl" />
                  </div>
                )}
              </div>

              {/* Right Side: Text */}
              <div className="lg:w-3/5 text-white">
                <FaQuoteLeft className="text-4xl text-yellow-400 opacity-80 mb-4" />
                <p className="text-lg md:text-xl italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-yellow-400"></div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-green-400 font-medium">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 rounded-full flex items-center justify-center bg-yellow-400 text-black hover:bg-green-500 transition duration-300 shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 rounded-full flex items-center justify-center bg-yellow-400 text-black hover:bg-green-500 transition duration-300 shadow-lg"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-yellow-400 w-8" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
