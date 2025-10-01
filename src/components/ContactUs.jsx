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
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import emailjs from "@emailjs/browser";
import ThreadsLogo from "../assets/images/Threads.webp";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Form submission logic would go here
  //   alert("Thank you for your message! We will get back to you soon.");
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send Email via EmailJS
    emailjs
      .send(
        "service_amzs943",
        "template_75oxjmk",
        formData,
        "lzU4090RrPwQncSrq"
      )
      .then(
        () => {
          setIsOpen(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setLoading(false);

          // Auto close popup after 5 seconds
          setTimeout(() => setIsOpen(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };
  console.log(loading);

  return (
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 flex items-center">
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
                      +91 9734548688 , +91 9891204847
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
                      +91 9734548688
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
                    <p className="text-gray-800">
                      TC 39/1768 Yamuna Nagar, 2nd Street Manacaud
                      Thiruvananthapuram – 695009 Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.threads.com/@neenvias19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1877F2] hover:bg-[#efededc3] hover:text-white transition"
                  >
                    {/* <FaFacebookF size={22} /> */}
                    <img src={ThreadsLogo} alt="Threads" className="w-8 h-8" />
                  </a>
                  <a
                    href="https://x.com/amansoni0907?t=UbljtlnD-pEOo98l9Zxxaw&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#000000] hover:bg-[#000] hover:text-white transition"
                  >
                    <FaXTwitter size={22} />
                  </a>
                  <a
                    href="https://www.instagram.com/amansoni0907?igsh=NmNhMndpZXBuZ2Jv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition"
                  >
                    <FaInstagram size={22} />
                  </a>
                  <a
                    href="https://youtube.com/playlist?list=PLsL82bR4GX4yxkO_H5orTADxfqm9ghVyG&si=aZP-Py7fKjD2lFpA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition"
                  >
                    <FaYoutube size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 flex items-center">
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
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full mb-6 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                />

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full mb-6 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A017] resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4A017] text-white font-bold rounded-xl hover:shadow-md transition transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
              {/* Success Popup */}
              {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center w-full max-w-sm sm:max-w-md md:max-w-lg animate-fade-in">
                    <h3 className="text-lg sm:text-xl font-semibold text-green-600">
                      ✅ Form Submitted!
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base font-semibold">
                      Thank you for contacting us. We’ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
