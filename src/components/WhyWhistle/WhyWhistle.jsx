import { useEffect, useState } from "react";
import "./WhyWhistle.css";
import whyData from "../../data/whyData.json";
import why1 from "../../assets/images/why1.png";
import why2 from "../../assets/images/why2.png";
import why3 from "../../assets/images/why3.png";
import why4 from "../../assets/images/why4.png";

function WhyWhistle() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const images = {
    why1,
    why2,
    why3,
    why4,
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError("");

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setCards(whyData);
      } catch (err) {
        setError("Unable to load Why Whistle section.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Whistle?</h2>

          <div className="why-grid">
            {[1, 2, 3, 4].map((item) => (
              <div className="skeleton-card" key={item}>
                <div className="skeleton-image"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="container">
          <div className="error-box">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Why Whistle?</h2>

        <div className="why-grid">
          {cards.map((card) => (
            <div key={card.id} className="why-card">
              <div className="why-image">
                <img src={images[card.image]} alt={card.title} />
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