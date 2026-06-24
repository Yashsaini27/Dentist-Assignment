import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import CloveBand from "./components/CloveBand/CloveBand";
import DreamBand from "./components/DreamBand/DreamBand";
import Results from "./components/Results/Result";
import WhyWhistle from "./components/WhyWhistle/WhyWhistle";

import FAQ from "./components/FAQ/FAQ";

const sections = [
  Hero,
  CloveBand,
  DreamBand,
  Results,
  WhyWhistle,

  FAQ,
];

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        {sections.map((Section, index) => (
          <Section key={index} />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;