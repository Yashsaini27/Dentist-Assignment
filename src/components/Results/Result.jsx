import { useEffect, useState } from "react";
import "../../index.css";
function Results() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    setData(null);
    setError(null);
    const issues = ["Crowding", "Spacing", "Overbite", "Crossbite", "Open bite", "Crooked teeth"];
    const treatments = ["Aligners · 6 mo", "Aligners · 9 mo", "Aligners · 12 mo", "Aligners · 4 mo"];
    fetch("https://dummyjson.com/users?limit=6&select=firstName,lastName,image")
      .then((r) => { if (!r.ok) throw new Error("Network error"); return r.json(); })
      .then((json) => {
        if (!alive) return;
        const mapped = json.users.map((u, i) => ({
          id: u.id,
          name: `${u.firstName} ${u.lastName[0]}.`,
          issue: issues[i % issues.length],
          treatment: treatments[i % treatments.length],
          image: u.image,
        }));
        setData(mapped);
      })
      .catch((e) => { if (alive) setError(e.message || "Failed to load"); });
    return () => { alive = false; };
  }, [tick]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Results You'll Love</h2>
        {error ? (
          <div className="error-box">
            Couldn't load smiles right now. {error}.
            <div><button className="retry-btn" onClick={() => setTick((t) => t + 1)}>Try again</button></div>
          </div>
        ) : !data ? (
          <div className="results-grid" aria-busy="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="photo skeleton" />
                <div className="line skeleton" style={{ width: "60%" }} />
                <div className="line skeleton" style={{ width: "40%" }} />
              </div>
            ))}
          </div>
        ) : (
          <div className="results-grid">
            {data.map((s) => (
              <article key={s.id} className="result-card">
                <div className="photo"><img src={s.image} alt={s.name} loading="lazy" /></div>
                <div className="meta">
                  <div className="name">{s.name}</div>
                  <div className="issue">{s.issue}</div>
                  <div className="issue">{s.treatment}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Results;