import React from "react";
// import "./home.css";
import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ServicesSection from "../../components/ServicesSection";
import ReviewsSection from "../../components/ReviewsSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import GoToTopButton from "../../components/GoToTopButton";
import ContactInfo from "../../components/ContactInfo";

const HomePage = () => {
  return (
<>
<Header/>
<HomeSection/>
<AboutSection/>
<ServicesSection/>
<ReviewsSection/>
<ContactSection/>
<ContactInfo/>
<Footer/>
<GoToTopButton/>
</>
  );
};

export default HomePage;
