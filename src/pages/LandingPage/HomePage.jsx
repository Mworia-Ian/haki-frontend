import React from "react";
// import "./home.css";
import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ServicesSection from "../../components/ServicesSection";
import ReviewsSection from "../../components/ReviewsSection";
import ContactSection from "../../components/ContactSection";

const HomePage = () => {
  return (
<>
<Header/>
<HomeSection/>
<AboutSection/>
<ServicesSection/>
<ReviewsSection/>
<ContactSection/>
</>
  );
};

export default HomePage;
