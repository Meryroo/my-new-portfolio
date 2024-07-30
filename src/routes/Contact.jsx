import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero heading="CONTACT" text="Let´s have a chat"></Hero>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
