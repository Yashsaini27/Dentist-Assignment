import { useEffect, useState } from "react";
import "../../index.css";
import image3 from "../../assets/images/image 3.png";

function DreamBand() {
  return (
    <section className="section band">
      <div className="container band-inner">
        <div>
          <h2>Dream smiles<br />achieved secretly</h2>
          <p>Transparent aligners gently shift your teeth into place without anyone noticing — wear them comfortably and remove them when you eat.</p>
          <p>The process is simple: a free 3D scan, a custom plan from licensed orthodontists, and a series of aligners delivered to your door.</p>
        </div>
        <div className="product-card">
          <div className="label">Whistle Aligners</div>
          <div className="price">₹47,999 <s>₹89,999</s></div>
          <img src={image3} alt="Whistle Aligners" />
          <ul className="bullets">
            <li>Doctor-led treatment</li>
            <li>EMI starting ₹2,000/mo</li>
            <li>Free home delivery</li>
          </ul>
          <button className="btn-primary">Get started</button>
        </div>
      </div>
    </section>
  );
}

export default DreamBand;