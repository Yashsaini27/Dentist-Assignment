import { useEffect, useState } from "react";
import "../../index.css";
function WhyWhistle() {
  const cards = [
    { title: "Doctor-led smile", text: "Treatment planned and reviewed by licensed orthodontists.", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80" },
    { title: "Pain-free process", text: "Custom aligners that move teeth gently and predictably.", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80" },
    { title: "Made in best labs", text: "Manufactured in the same labs that supply global brands.", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80" },
    { title: "Lifestyle friendly", text: "Eat, drink and smile freely — remove them whenever you want.", img: "https://images.unsplash.com/photo-1614859540331-345dccdd6ca0?w=600&q=80" },
  ];
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        <h2 className="section-title">Why Whistle?</h2>
        <div className="why-grid">
          {cards.map((c) => (
            <article key={c.title} className="why-card">
              <div className="img"><img src={c.img} alt={c.title} loading="lazy" /></div>
              <div className="body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWhistle;