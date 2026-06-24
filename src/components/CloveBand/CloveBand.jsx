import "./CloveBand.css";
import clove from "../../assets/images/clove logo.png";
import { IoChevronDown } from "react-icons/io5";

function CloveBand() {
  return (
    <section className="clove-band">
      <div className="container">
        <div className="clove-card">
          <div className="clove-content">
            <h2>
              Book a Free 3D Teeth Scan and Orthodontist
              Consult in a Clove Dental Clinic near you.
            </h2>
          </div>

          <div className="clove-side">
            <img
              src={clove}
              alt="Clove Dental"
              className="clove-logo"
            />

            <button className="find-clinic-btn">
              Find Clinic
              <span><IoChevronDown /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloveBand;