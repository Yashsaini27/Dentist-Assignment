import { useEffect, useState } from "react";


import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import Marque from "./components/Marque/Marque";
import DreamBand from "./components/DreamBand/DreamBand";
import Results from "./components/Results/Result";
import WhyWhistle from "./components/WhyWhistle/WhyWhistle";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import CloveBand from "./components/CloveBand/CloveBand";

export default function App() {
  return (
    <>
      <Header />
      
      <Hero/>
      {/* <Marque /> */}
      <CloveBand/>
      <DreamBand />
      <Results />
      <WhyWhistle />
      <FAQ />
      <Footer />
    </>
  );
}