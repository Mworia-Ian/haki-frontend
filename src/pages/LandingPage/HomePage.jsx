import React from "react";
// import "./home.css";
import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ServicesSection from "../../components/ServicesSection";
import ReviewsSection from "../../components/ReviewsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
<>
<Header/>
<HomeSection/>
<AboutSection/>
<ServicesSection/>
<ReviewsSection/>
<ContactSection/>
<Footer/>
</>
  );
};

export default HomePage;
