import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Service />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
