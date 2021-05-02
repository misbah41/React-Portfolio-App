import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolios from "../Portfolios/Portfolios";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";
import "./Home.css";
const Home = () => {
  return (
    <main id="home">
      <Header />
      <Banner />
      <About />
      <Service />
      <Skills />
      <Portfolios />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
