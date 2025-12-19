import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


export default function Landing() {
  return (
    <>
      <Navbar />
      <Contact />
      <Intro />
      <WhyChooseUs />
      <About />
      <Projects />
      <Clients />
      <Newsletter />
      <Footer />
    </>
  );
}
