import { useState } from "react";
import "./Hero.css";
import heroimg from "../../assets/images/heroimg.png";

function Hero() {
  const [issue, setIssue] = useState("yes");
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Invisible Aligners for a dream smile</h1>
            <p>Book a Scan and avail a free<br />Orthodontist Consult <span className="accent-purple">worth ₹1500</span></p>
          </div>
          <div className="hero-img">
            <img src={heroimg} alt="Smiling person with aligners" />
          </div>
        </div>
      </section>
      <section className="lead-form-section">
        <div className="container">
          <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-q">Do you have Teeth Gaps or Crooked Teeth?</div>
            <div className="radio-row center">
              <label><input type="radio" name="issue" checked={issue === "yes"} onChange={() => setIssue("yes")} /> Yes</label>
              <label><input type="radio" name="issue" checked={issue === "no"} onChange={() => setIssue("no")} /> No</label>
            </div>
            <div className="form-row3">
              <div className="input-group">
                <input
                  type="text"
                  required
                  placeholder=" "
                />
                <label>Full Name*</label>
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  required
                  placeholder=" "
                />
                <label>+91 Mobile Number*</label>
              </div>
              <button type="submit" className="btn-primary">Book a Free Scan</button>
            </div>
            <label className="consent">
              <input type="checkbox" defaultChecked /> I hereby consent to Whistle calls / messages from Whistle and its partners and override DNC settings.
            </label>
          </form>
        </div>
      </section>
    </>
  );
}

export default Hero;