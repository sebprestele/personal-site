import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import About from "../About/About";

function Home() {
  //Setup for the darkmode toggle

  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((prevIsDark) => !prevIsDark);

  return (
    <>
      <Navigation
        toggleDark={toggleDark}
        isDark={isDark}
        changeColor={
          isDark
            ? (document.body.classList = "")
            : (document.body.classList = "lightmode")
        }
      />

      <Hero />
      <About id="about" />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}

export default Home;
