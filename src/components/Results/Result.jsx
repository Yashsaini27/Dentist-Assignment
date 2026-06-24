import { useEffect, useState } from "react";
import "./Result.css";
import resultsData from "../../data/results.json";
import before1 from "../../assets/images/before1.png";
import after1 from "../../assets/images/after1.png";
import before2 from "../../assets/images/before2.png";
import after2 from "../../assets/images/after2.png";
import before3 from "../../assets/images/before3.png";
import after3 from "../../assets/images/after3.png";
import before4 from "../../assets/images/before4.png";
import after4 from "../../assets/images/after4.png";

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const images = {
    before1,
    after1,
    before2,
    after2,
    before3,
    after3,
    before4,
    after4,
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError("");

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setResults(resultsData);
      } catch (err) {
        setError("Unable to load smile transformations. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Results You'll Love</h2>

          <div className="results-grid">
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
        <h2 className="section-title">
          Results You'll Love
        </h2>

        <div className="results-grid">
          {results.map((item) => (
            <div key={item.id} className="result-card">
              <div className="ba-row">
                <div className="ba-cell">
                  <div className="photo">
                    <img src={images[item.before.replace(".jpg", "")] } alt="Before" />
                  </div>
                  <div className="ba-tag">Before</div>
                </div>

                <div className="ba-cell">
                  <div className="photo">
                    <img src={images[item.after.replace(".jpg", "")] } alt="After" />
                  </div>
                  <div className="ba-tag">After</div>
                </div>
              </div>

              <div className="concern-row">
                <span>Concern</span>
                <span>{item.concern}</span>
              </div>

              <div className="concern-row">
                <span>Treatment Duration</span>
                <span>{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;