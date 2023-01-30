import React from "react";
import Header from "../components/Header/Header";
// import NavMenu from "../components/NavMenu/NavMenu";
import ImgSliderSection from "../components/ImgSliderSection/ImgSliderSection";
import Infographics from "../components/Infographics/Infographics";
import Adcard from "../components/Adcard/Adcard";
import About from "../components/About/About";
import Course from "../components/Course/Course";
import Enroll from "../components/Enroll/Enroll";
import Services from "../components/Services/Services";
import Videos from "../components/Videos/Videos";
import Vision from "../components/Vision/Vision";
import Events from "../components/Events/Events";
import Blogs from "../components/Blogs/Blogs";
import Reviews from "../components/Reviews/Reviews";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ImgSliderSection />
        <Adcard />
        <About />
        <Infographics />
        <Course />
        <Enroll />
        <Services />
        <Videos />
        <Vision />
        <Events />
        <Reviews />
        <Blogs />
        <Contacts />
        <Footer />
      </>
    );
  }
}

export default Home;
