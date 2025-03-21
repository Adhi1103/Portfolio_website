import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experience from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate"; // Capitalized component name
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16"> {/* Ensure navbar doesn't overlap */}
        <div name="Home">
          <Home />
        </div>
        <div name="About">
          <About />
        </div>
        <div name="Projects">
          <PortFolio />
        </div>
        <div name="Skills">
          <Experience />
        </div>
        <div name="Certificates">
          <Certificate />
        </div>
        <div name="Contact">
          <Contact />
        </div>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
