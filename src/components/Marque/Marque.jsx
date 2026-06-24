import { useEffect, useState } from "react";
import "../../index.css";
function Marque() {
  const items = [
    "Morning slots available",
    "Free metro clinic visit worth ₹1500",
    "Free orthodontist consultation worth ₹1500",
    "Same day aligner scans",
    "Treatment plans in 48 hrs",
  ];
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((t, i) => (<span key={i}>● {t}</span>))}
      </div>
    </div>
  );
}

export default Marque;