import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Exceptional from "./Exceptional";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main className="lg:px-12 md:px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </main>
  );
};

export default Home;
