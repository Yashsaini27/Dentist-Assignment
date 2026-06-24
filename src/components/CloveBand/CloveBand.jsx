import { useEffect, useState } from "react";
import "../../index.css";

function CloveBand() {
  return (
    <section className="clove-band">
      <div className="container clove-inner">
        <div className="clove-text">
          <p>Book a Free 3D Teeth Scan and Orthodontist Consult in a <strong>Clove Dental Clinic</strong> near you.</p>
        </div>
        <div className="clove-side">
          <div className="clove-logo">clove<span>:)</span><small>DENTAL</small></div>
          <a href="#" className="find-clinic">Find Clinic ▾</a>
        </div>
      </div>
    </section>
  );
}

export default CloveBand;