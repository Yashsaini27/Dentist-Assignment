import { useState } from "react";
import "../../index.css";
function FAQ() {
  const items = [
    { q: "What are Aligners?", a: "Aligners are clear, removable trays that gently shift your teeth into place over time." },
    { q: "How do Aligners work?", a: "Each aligner moves your teeth by small increments. You wear each set for ~2 weeks before moving to the next." },
    { q: "Can my dentist do irregular teeth treatment?", a: "Whistle treatments are designed and supervised by licensed orthodontists." },
    { q: "Are there any restrictions on eating or drinking?", a: "No — simply remove your aligners while eating and drinking anything other than water." },
    { q: "How long does the treatment take?", a: "Most treatments take 4 to 12 months depending on the complexity of your case." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-band">
      <div className="container">
        <h2 className="faq-title"><span className="accent">Got Questions?</span> We've got answers</h2>
        <div className="faq-list">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{it.q}</span><span className="plus">+</span>
                </button>
                {isOpen && <div className="faq-a">{it.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;