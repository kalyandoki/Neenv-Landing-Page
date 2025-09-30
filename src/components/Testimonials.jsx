import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaPlay,
} from "react-icons/fa";
import img1 from "../assets/test/vasu.jpg";
import img2 from "../assets/test/reshma.jpg";
import img3 from "../assets/test/ravi.jpg";
import img4 from "../assets/test/ipsita.jpg";
import img5 from "../assets/test/jithin.jpg";
import img6 from "../assets/test/divya.jpg";
import img7 from "../assets/test/ashish.jpg";
import img8 from "../assets/test/muhammad.jpg";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Vasu Aggarwal",
      role: "AIR-172, JKPS 2023",
      content:
        "I cannot forget those struggling days when I joined SRIAS - Regional Centre Jammu and came across a teacher, mentor & intellectual like you who did not only guide me like a teacher but also like an elder brother.",
      image: img1,
      type: "image",
    },
    {
      id: 2,
      name: "Reshma AL",
      role: "AIR-256, UPSC 2020",
      content:
        "I was new to economics. But your classes made it really interesting and easy for me. Your classes were really amazing. It gave me good foundation and clear understanding of concepts. Even in my 4th attempt before going for the interview, I revised your notes. Thank you so much sir.",
      image: img2,
      type: "image",
    },
    {
      id: 3,
      name: "Ravisankar Sharma",
      role: "AIR-37, IFoS 2018",
      content:
        "It was indeed a great experience to see how such a tough technical subject like economics was made easily understandable by Aman Sir and that provided the foundation for my preparation for Prelims and GS3 Mains.",
      image: img3,
      type: "image",
    },
    {
      id: 4,
      name: "Ipsita Datta",
      role: "DYSP, WBCS 2017",
      content:
        "Understanding business economics & market fluctuations becomes easy, all thanks to Aman Soni sir’s logical module teaching method.",
      image: img4,
      type: "image",
    },
    {
      id: 5,
      name: "Jithin Krishnan B",
      role: "AIR-278, UPSC 2021",
      content:
        "Aman Sir Masters in simplifying Economics with relatable examples and illustrations.",
      image: img5,
      type: "image",
    },
    {
      id: 6,
      name: "Divya Chandran",
      role: "AIR-397, Civil Services 2018",
      content:
        "Aman Sir's GS-3 handouts and revision of Economic Survey were very helpful in my preparation. Thank you for your guidance in GS-3.",
      image: img6,
      type: "image",
    },
    {
      id: 7,
      name: "Ashish Chugh",
      role: "Indian Telecom Service (2014), UPSC ESE AIR-30",
      content:
        "Aman sir is very dedicated and supports every hardworking student to the fullest.",
      image: img7,
      type: "image",
    },
    {
      id: 8,
      name: "Muhammad Afzal",
      role: "AIR-599, CSE 2022",
      content:
        "Being from an engineering background, I had no prior knowledge of economics. Aman Soni Sir's classes helped me build a strong foundation. I used his notes and cleared UPSC. Thank you, sir!",
      image: img8,
      type: "image",
    },
    // {
    //   id: 8,
    //   name: "Vikram Mehta",
    //   role: "AIR-112, UPSC 2023",
    //   content:
    //     "I joined the Optional Mentorship program for PSIR and it transformed my preparation. The daily answer writing practice and personalized feedback helped me improve significantly. Highly recommend Neenv IAS!",
    //   image:
    //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=687&q=80",
    //   type: "video",
    // },
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
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #254979 0%, #358D55 100%)",
      }}
    >
      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-[#d4a017] opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-white opacity-5 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-black text-[#d4a017] font-bold rounded-full mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Toppers' <span className="text-[#d4a017]">Talk</span>
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
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#d4a017] shadow-xl relative">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                ) : (
                  <div className="w-64 h-64 rounded-full bg-gray-800 border-4 border-[#d4a017] shadow-xl flex items-center justify-center relative">
                    <FaPlay className="text-white text-4xl" />
                  </div>
                )}
              </div>

              {/* Right Side: Text */}
              <div className="lg:w-3/5 text-white">
                <FaQuoteLeft className="text-4xl text-[#d4a017] opacity-80 mb-4" />
                <p className="text-lg md:text-xl italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-0.5 bg-[#d4a017]"></div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-[#2ECC40] font-medium">
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
                  idx === activeIndex ? "bg-[#d4a017] w-8" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>

    // <section
    //   id="testimonials"
    //   className="py-24 relative overflow-hidden"
    //   style={{
    //     background: "linear-gradient(180deg, #254979 0%, #358D55 100%)",
    //   }}
    // >
    //   {/* Decorative Background Circles */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-yellow-400 opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-white opacity-5 blur-3xl animate-pulse-slow"></div>
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     {/* Section Header */}
    //     <div className="text-center mb-20">
    //       <span className="inline-block px-6 py-2 bg-black text-yellow-400 font-bold rounded-full mb-4">
    //         SUCCESS STORIES
    //       </span>
    //       <h2 className="text-4xl md:text-5xl font-extrabold text-white">
    //         Student <span className="text-yellow-400">Testimonials</span>
    //       </h2>
    //       <div className="w-40 h-1.5 bg-green-400 mx-auto rounded-full my-4"></div>
    //       <p className="text-gray-100 max-w-2xl mx-auto text-lg">
    //         Hear from our successful candidates who achieved their dreams with
    //         our guidance.
    //       </p>
    //     </div>

    //     {/* Testimonial Card */}
    //     <div className="max-w-5xl mx-auto relative">
    //       <div className="bg-black/70 border border-green-500/30 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-green-400/40">
    //         <div className="p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
    //           {/* Left Side: Image / Video */}
    //           <div className="lg:w-2/5 flex justify-center relative">
    //             <div className="absolute -inset-4 rounded-full bg-green-500/10 blur-xl"></div>
    //             {testimonials[activeIndex].type === "image" ? (
    //               <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl relative">
    //                 <img
    //                   src={testimonials[activeIndex].image}
    //                   alt={testimonials[activeIndex].name}
    //                   className="w-full h-full object-cover"
    //                 />
    //                 <div className="absolute inset-0 bg-black/20"></div>
    //               </div>
    //             ) : (
    //               <div className="w-64 h-64 rounded-full bg-gray-800 border-4 border-yellow-400 shadow-xl flex items-center justify-center relative">
    //                 <FaPlay className="text-white text-4xl" />
    //               </div>
    //             )}
    //           </div>

    //           {/* Right Side: Text */}
    //           <div className="lg:w-3/5 text-white">
    //             <FaQuoteLeft className="text-4xl text-yellow-400 opacity-80 mb-4" />
    //             <p className="text-lg md:text-xl italic mb-6">
    //               "{testimonials[activeIndex].content}"
    //             </p>
    //             <div className="flex items-center gap-4">
    //               <div className="w-16 h-0.5 bg-yellow-400"></div>
    //               <div>
    //                 <h4 className="text-2xl font-bold text-white">
    //                   {testimonials[activeIndex].name}
    //                 </h4>
    //                 <p className="text-green-400 font-medium">
    //                   {testimonials[activeIndex].role}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Navigation Buttons */}
    //       <button
    //         onClick={prevTestimonial}
    //         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-14 h-14 rounded-full flex items-center justify-center bg-yellow-400 text-black hover:bg-green-500 transition duration-300 shadow-lg"
    //       >
    //         <FaChevronLeft />
    //       </button>
    //       <button
    //         onClick={nextTestimonial}
    //         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-14 h-14 rounded-full flex items-center justify-center bg-yellow-400 text-black hover:bg-green-500 transition duration-300 shadow-lg"
    //       >
    //         <FaChevronRight />
    //       </button>

    //       {/* Dots */}
    //       <div className="flex justify-center mt-10 gap-3">
    //         {testimonials.map((_, idx) => (
    //           <button
    //             key={idx}
    //             onClick={() => setActiveIndex(idx)}
    //             className={`w-3 h-3 rounded-full transition-all duration-300 ${
    //               idx === activeIndex ? "bg-yellow-400 w-8" : "bg-white/50"
    //             }`}
    //           ></button>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Testimonials;
