import resultsData from "../../data/results.json";

import before1 from "../../assets/images/before1.png";
import after1 from "../../assets/images/after1.png";

import before2 from "../../assets/images/before2.png";
import after2 from "../../assets/images/after2.png";

import before3 from "../../assets/images/before3.png";
import after3 from "../../assets/images/after3.png";

import before4 from "../../assets/images/before4.png";
import after4 from "../../assets/images/after4.png";
import "./Result.css";

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

function Results() {
  return (
    <section className="results-section">
      <div className="container">
        <h2 className="section-title">
          Results You'll Love
        </h2>

        <div className="results-grid">
          {resultsData.map((item) => (
            <div className="result-card" key={item.id}>
              <div className="ba-row">
                <div className="ba-cell">
                  <div className="photo">
                    <img
                      src={images[item.before.replace(".jpg", "")]}
                      alt="Before"
                    />
                  </div>
                  <div className="ba-tag">Before</div>
                </div>

                <div className="ba-cell">
                  <div className="photo">
                    <img
                      src={images[item.after.replace(".jpg", "")]}
                      alt="After"
                    />
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