import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Faculty from "../components/Faculty";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Faculty />
      <Courses />
      <Testimonials />
      <ContactUs />
      <Footer />
      <a
        href="https://wa.me/919734548688"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full shadow-2xl px-3 py-3 font-semibold z-100 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white transition"
      >
        <FaWhatsapp size={42} />
        {/* <span>Chat on WhatsApp</span> */}
      </a>
    </div>
  );
};

export default Home;
