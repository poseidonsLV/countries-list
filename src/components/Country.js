import React from "react";
import "../styles/Country.css";
import { Link } from "react-router-dom";
function Country({ name, population, region, capital, flag }) {
  return (
    <Link id="link" to={`/country/${name}`}>
      <div className="country-card">
        <div className="image-container">
          <img src={flag} alt={name || "Undefined"} />
        </div>
        <div className="country-footer">
          <div className="country-name">
            <p>{name || "Undefined"}</p>
          </div>
          <div className="country-details">
            <p>
              Population: <span>{population || "Undefined"}</span>
            </p>
            <p>
              Region: <span>{region || "Undefined"}</span>
            </p>
            <p>
              Capital: <span>{capital || "Undefined"}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Country;
