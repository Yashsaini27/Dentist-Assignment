import { useEffect, useState } from "react";
import "./WhyWhistle.css";
import whyData from "../../data/whyData.json";

import why1 from "../../assets/images/why1.png";
import why2 from "../../assets/images/why2.png";
import why3 from "../../assets/images/why3.png";
import why4 from "../../assets/images/why4.png";

function WhyWhistle() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(whyData);
  }, []);

  const images = {
    why1,
    why2,
    why3,
    why4,
  };

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">Why Whistle?</h2>

        <div className="why-grid">
          {cards.map((card) => (
            <div className="why-card" key={card.id}>
              <div className="why-image">
                <img
                  src={images[card.image]}
                  alt={card.title}
                />
              </div>

              <div className="why-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWhistle;