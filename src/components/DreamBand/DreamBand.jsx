import "./DreamBand.css";
import image3 from "../../assets/images/image 3.png";

function DreamBand() {
  return (
    <section className="section band">
      <div className="container band-inner">
        <div className="band-content">
          <h2>
            Dream smiles
            <br />
            achieved secretly
          </h2>

          <p>
            Transparent aligners gently shift your teeth into place without
            anyone noticing — wear them comfortably and remove them when you eat.
          </p>

          <p>
            The process is simple: a free 3D scan, a custom plan from licensed
            orthodontists, and a series of aligners delivered to your door.
          </p>
        </div>

        <div className="product-card">
          <div className="product-content">
            <div className="product-info">
              <h3>Whistle Aligners</h3>

              <div className="old-price">₹84,000</div>

              <div className="new-price">
                starting at <span>₹47,999</span>
              </div>

              <div className="tax-text">
                inc. of all taxes
              </div>

              <ul className="bullets">
                <li>Offer valid for a limited time</li>
                <li>Easy financing options</li>
              </ul>
            </div>

            <div className="product-image">
              <img src={image3} alt="Whistle Aligners" />
            </div>
          </div>

          <div className="learn-more">
            Learn more →
          </div>
        </div>
      </div>
    </section>
  );
}

export default DreamBand;