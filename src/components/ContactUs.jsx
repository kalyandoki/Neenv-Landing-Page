import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCommentAlt,
} from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    // <section
    //   id="contact"
    //   className="py-24 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
    // >
    //   {/* Animated background elements */}
    //   <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    //     <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#ffc107] opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#2ECC40] opacity-10 blur-3xl animate-pulse-slow"></div>
    //     <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-[#ffc107] opacity-5 blur-3xl animate-pulse-slow"></div>

    //     {/* Grid pattern overlay */}
    //     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNnY2SDB6bTYgMGg2djZINnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNNiA2aDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnptNiAwaDZ2NmgtNnpNMTIgMTJoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC02em02IDBoNnY2aC06ek0xOCAxOGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6bTYgMGg2djZoLTZ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-10"></div>
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     {/* Section Header */}
    //     <div className="text-center mb-20">
    //       <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] rounded-full mb-6 shadow-lg">
    //         <span className="text-white font-bold tracking-wider">
    //           GET IN TOUCH
    //         </span>
    //       </div>
    //       <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
    //         Contact{" "}
    //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#2ECC40]">
    //           Us
    //         </span>
    //       </h2>
    //       <div className="w-40 h-1.5 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] mx-auto rounded-full mb-8 shadow-lg shadow-[#ffc107]/30"></div>
    //       <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
    //         Have questions? Reach out to us and we'll be happy to help you with
    //         your UPSC preparation journey.
    //       </p>
    //     </div>

    //     <div className="max-w-6xl mx-auto">
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    //         {/* Contact Information */}
    //         <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
    //           <div className="flex items-center mb-8">
    //             <div className="w-12 h-0.5 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] mr-4"></div>
    //             <h3 className="text-2xl font-bold text-gray-800">
    //               Get in{" "}
    //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#2ECC40]">
    //                 Touch
    //               </span>
    //             </h3>
    //           </div>

    //           <div className="space-y-6 mb-10">
    //             <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#ffc107]/50 transition-all duration-300 group">
    //               <div className="w-12 h-12 rounded-full bg-[#ffc107]/10 flex items-center justify-center mr-4 group-hover:bg-[#ffc107]/20 transition-colors">
    //                 <FaEnvelope className="text-[#ffc107] text-xl" />
    //               </div>
    //               <div>
    //                 <p className="text-gray-500 text-sm">Email</p>
    //                 <a
    //                   href="mailto:NeenvIAS@gmail.com"
    //                   className="text-gray-800 hover:text-[#ffc107] transition-colors font-medium"
    //                 >
    //                   NeenvIAS@gmail.com
    //                 </a>
    //               </div>
    //             </div>

    //             <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#2ECC40]/50 transition-all duration-300 group">
    //               <div className="w-12 h-12 rounded-full bg-[#2ECC40]/10 flex items-center justify-center mr-4 group-hover:bg-[#2ECC40]/20 transition-colors">
    //                 <FaPhone className="text-[#2ECC40] text-xl" />
    //               </div>
    //               <div>
    //                 <p className="text-gray-500 text-sm">Phone</p>
    //                 <a
    //                   href="tel:9734548688"
    //                   className="text-gray-800 hover:text-[#2ECC40] transition-colors font-medium"
    //                 >
    //                   9734548688
    //                 </a>
    //               </div>
    //             </div>

    //             <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#2ECC40]/50 transition-all duration-300 group">
    //               <div className="w-12 h-12 rounded-full bg-[#2ECC40]/10 flex items-center justify-center mr-4 group-hover:bg-[#2ECC40]/20 transition-colors">
    //                 <FaWhatsapp className="text-[#2ECC40] text-xl" />
    //               </div>
    //               <div>
    //                 <p className="text-gray-500 text-sm">WhatsApp</p>
    //                 <a
    //                   href="https://wa.me/919734548688"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="text-gray-800 hover:text-[#2ECC40] transition-colors font-medium"
    //                 >
    //                   9734548688
    //                 </a>
    //               </div>
    //             </div>

    //             <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#2ECC40]/50 transition-all duration-300 group">
    //               <div className="w-12 h-12 rounded-full bg-[#2ECC40]/10 flex items-center justify-center mr-4 group-hover:bg-[#2ECC40]/20 transition-colors">
    //                 <FaPhone className="text-[#2ECC40] text-xl" />
    //               </div>
    //               <div>
    //                 <p className="text-gray-500 text-sm">Alternate Phone</p>
    //                 <a
    //                   href="tel:+919891204847"
    //                   className="text-gray-800 hover:text-[#2ECC40] transition-colors font-medium"
    //                 >
    //                   +91 98912 04847
    //                 </a>
    //               </div>
    //             </div>

    //             {/* Office Location */}
    //             <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#ffc107]/50 transition-all duration-300 group">
    //               <div className="w-12 h-12 rounded-full bg-[#ffc107]/10 flex items-center justify-center mr-4 group-hover:bg-[#ffc107]/20 transition-colors">
    //                 <MdLocationOn className="text-[#ffc107] text-xl" />
    //               </div>
    //               <div>
    //                 <p className="text-gray-500 text-sm">Office Location</p>
    //                 <p className="text-gray-800 hover:text-[#ffc107] transition-colors font-medium">
    //                   Delhi, India
    //                 </p>
    //               </div>
    //             </div>

    //             {/* Office Hours */}
    //             <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#ffc107]/50 transition-all duration-300 group">
    //               <div className="w-12 h-12 rounded-full bg-[#ffc107]/10 flex items-center justify-center mr-4 group-hover:bg-[#ffc107]/20 transition-colors">
    //                 <MdAccessTime className="text-[#ffc107] text-xl" />
    //               </div>
    //               <div>
    //                 <p className="text-gray-500 text-sm">Office Hours</p>
    //                 <p className="text-gray-800 hover:text-[#ffc107] transition-colors font-medium">
    //                   Mon-Sat: 9:30 AM - 6:30 PM
    //                 </p>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="mt-10">
    //             <div className="flex items-center mb-6">
    //               <div className="w-8 h-0.5 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] mr-3"></div>
    //               <h4 className="text-xl font-semibold text-gray-800">
    //                 Follow Us
    //               </h4>
    //             </div>
    //             <div className="flex space-x-4">
    //               <a
    //                 href="#"
    //                 className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-200"
    //               >
    //                 <FaFacebookF className="text-lg" />
    //               </a>
    //               <a
    //                 href="#"
    //                 className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-200"
    //               >
    //                 <FaTwitter className="text-lg" />
    //               </a>
    //               <a
    //                 href="#"
    //                 className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-200"
    //               >
    //                 <FaInstagram className="text-lg" />
    //               </a>
    //               <a
    //                 href="#"
    //                 className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-200"
    //               >
    //                 <FaYoutube className="text-lg" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Contact Form */}
    //         <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-xl">
    //           <div className="flex items-center mb-8">
    //             <div className="w-12 h-0.5 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] mr-4"></div>
    //             <h3 className="text-2xl font-bold text-gray-800">
    //               Send us a{" "}
    //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#2ECC40]">
    //                 Message
    //               </span>
    //             </h3>
    //           </div>

    //           <form onSubmit={handleSubmit}>
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    //               <div>
    //                 <label
    //                   htmlFor="name"
    //                   className="block text-gray-700 mb-3 font-medium"
    //                 >
    //                   Name
    //                 </label>
    //                 <div className="relative">
    //                   <input
    //                     type="text"
    //                     id="name"
    //                     name="name"
    //                     value={formData.name}
    //                     onChange={handleChange}
    //                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffc107] text-gray-800 transition-all"
    //                     required
    //                   />
    //                   <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    //                 </div>
    //               </div>

    //               <div>
    //                 <label
    //                   htmlFor="email"
    //                   className="block text-gray-700 mb-3 font-medium"
    //                 >
    //                   Email
    //                 </label>
    //                 <div className="relative">
    //                   <input
    //                     type="email"
    //                     id="email"
    //                     name="email"
    //                     value={formData.email}
    //                     onChange={handleChange}
    //                     className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffc107] text-gray-800 transition-all"
    //                     required
    //                   />
    //                   <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="mb-6">
    //               <label
    //                 htmlFor="phone"
    //                 className="block text-gray-700 mb-3 font-medium"
    //               >
    //                 Phone
    //               </label>
    //               <div className="relative">
    //                 <input
    //                   type="tel"
    //                   id="phone"
    //                   name="phone"
    //                   value={formData.phone}
    //                   onChange={handleChange}
    //                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffc107] text-gray-800 transition-all"
    //                 />
    //                 <FaPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    //               </div>
    //             </div>

    //             <div className="mb-8">
    //               <label
    //                 htmlFor="message"
    //                 className="block text-gray-700 mb-3 font-medium"
    //               >
    //                 Message
    //               </label>
    //               <div className="relative">
    //                 <textarea
    //                   id="message"
    //                   name="message"
    //                   value={formData.message}
    //                   onChange={handleChange}
    //                   rows="5"
    //                   className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffc107] text-gray-800 transition-all resize-none"
    //                   required
    //                 ></textarea>
    //                 <FaCommentAlt className="absolute right-4 top-4 text-gray-400" />
    //               </div>
    //             </div>

    //             <button
    //               type="submit"
    //               className="w-full py-4 bg-gradient-to-r from-[#ffc107] to-[#2ECC40] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
    //             >
    //               <span>Send Message</span>
    //               <FaPaperPlane className="ml-2" />
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      id="contact"
      className="py-24 bg-gray-100 relative overflow-hidden"
    >
      {/* Subtle background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#D4A017] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#2ECC40] opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-[#D4A017] text-white rounded-full mb-6 shadow-md">
            <span className="font-bold tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Contact <span className="text-[#D4A017]">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4A017] mx-auto mb-8 rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? Reach out to us and we'll be happy to help you with
            your UPSC preparation journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-1 bg-[#D4A017] mr-3 rounded"></span>
                Get in <span className="ml-2 text-[#D4A017]">Touch</span>
              </h3>

              <div className="space-y-6 mb-10">
                {/* Email */}
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-[#D4A017] text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a
                      href="mailto:NeenvIAS@gmail.com"
                      className="text-gray-800 hover:text-[#D4A017] transition-colors font-medium"
                    >
                      NeenvIAS@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#2ECC40]/10 flex items-center justify-center mr-4">
                    <FaPhone className="text-[#2ECC40] text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a
                      href="tel:9734548688"
                      className="text-gray-800 hover:text-[#2ECC40] transition-colors font-medium"
                    >
                      9734548688
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#2ECC40]/10 flex items-center justify-center mr-4">
                    <FaWhatsapp className="text-[#2ECC40] text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/919734548688"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#2ECC40] transition-colors font-medium"
                    >
                      9734548688
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center mr-4">
                    <MdLocationOn className="text-[#D4A017] text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Office Location</p>
                    <p className="text-gray-800">Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition">
                    <FaFacebookF />
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition">
                    <FaTwitter />
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition">
                    <FaInstagram />
                  </a>
                  <a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-1 bg-[#D4A017] mr-3 rounded"></span>
                Send us a <span className="ml-2 text-[#D4A017]">Message</span>
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mb-6 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                />

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full mb-6 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017] resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4A017] text-white font-bold rounded-xl hover:shadow-md transition transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
