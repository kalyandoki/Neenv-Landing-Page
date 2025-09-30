import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NeevnLogo from "../assets/images/Neenv-IAS.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black pt-16 pb-8 border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#D4A017] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#2ECC40] opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center group mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] rounded-full opacity-30 blur-md group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={NeevnLogo}
                  alt="Neenv IAS Logo"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10"
                />
              </div>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing quality and affordable education for UPSC aspirants
              across India with expert guidance and comprehensive resources.
            </p>

            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-[#D4A017] hover:to-[#2ECC40] hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-[#D4A017] hover:to-[#2ECC40] hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-[#D4A017] hover:to-[#2ECC40] hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-[#D4A017] hover:to-[#2ECC40] hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div> */}
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/share/14JVZbKhEmW/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition"
              >
                <FaFacebookF size={22} />
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

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="w-6 h-0.5 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", to: "hero" },
                { name: "About Us", to: "about" },
                { name: "Courses", to: "courses" },
                { name: "Testimonials", to: "testimonials" },
                { name: "Contact Us", to: "contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-3 group-hover:bg-gradient-to-r group-hover:from-[#D4A017] group-hover:to-[#2ECC40] transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="w-6 h-0.5 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] mr-3"></span>
              Our Courses
            </h3>
            <ul className="space-y-3">
              {[
                "GS Mentorship",
                "Optional Mentorship",
                "Current Affairs Program",
                "Polity GS Module",
                "Economy GS Module",
              ].map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-3 group-hover:bg-gradient-to-r group-hover:from-[#D4A017] group-hover:to-[#2ECC40] transition-all"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <span className="w-6 h-0.5 bg-gradient-to-r from-[#D4A017] to-[#2ECC40] mr-3"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaEnvelope className="text-[#D4A017]" />
                </div>
                <a
                  href="mailto:NeenvIAS@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  NeenvIAS@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaPhone className="text-[#2ECC40]" />
                </div>
                <a
                  href="tel:9734548688"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 9734548688
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaWhatsapp className="text-[#2ECC40]" />
                </div>
                <a
                  href="https://wa.me/919734548688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 9734548688
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-[#D4A017]" />
                </div>
                <span className="text-gray-400">
                  TC 39/1768 Yamuna Nagar, 2nd Street Manacaud
                  Thiruvananthapuram – 695009 Kerala, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Neenv IAS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <p className="text-gray-500 mb-4 md:mb-0">
                Developed by{" "}
                <a
                  href="https://mannschaftit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2ECC40] hover:underline"
                >
                  Mannschaft Infotech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
