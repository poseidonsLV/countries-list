import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";
import "../styles/CountryInfo.css";
function CountryInfo() {
  const { name } = useParams();
  const history = useHistory();
  const [countries] = useContext(CountriesContext);
  function goBack() {
    console.log(history.push("/"));
  }

  const cas = countries.find((c) => c.name === name);
  return (
    <div className="CountryInfo">
      <div className="back-button-container">
        <button onClick={goBack}>BACK</button>
      </div>
      <div className="countryInfo-bottom">
        <div className="left-side">
          <div className="countryInfo-flag">
            <img src={cas.flag} alt={cas.name} />
          </div>
        </div>
        <div className="right-side">
          <div className="countryInfo-row-1">
            <div className="col-1">
              <div className="countryInfo-name">{cas.name}</div>
              <div className="countryInfo-population">
                Population: <span>{cas.population}</span>
              </div>
              <div className="countryInfo-region">
                Region: <span>{cas.region}</span>
              </div>
              <div className="countryInfo-subRegion">
                Sub Region: <span>{cas.subregion}</span>
              </div>
              <div className="countryInfo-capital">
                Capital: <span>{cas.capital}</span>
              </div>
            </div>
            <div className="col-2">
              <div className="countryInfo-topDomain">
                {cas.topLevelDomain.map((toplvldom) => (
                  <p key={toplvldom}>
                    Top Level Domain: <span>{toplvldom}</span>
                  </p>
                ))}
              </div>
              <div className="countryInfo-currencies">
                {cas.currencies.map((curr) => (
                  <p key={curr.code}>
                    Currencies: <span>{curr.code}</span>
                  </p>
                ))}
              </div>
              <div className="countryInfo-languages">
                <h4>Languages:</h4>
                {cas.languages.map((language) => (
                  <p key={language.name}>
                    <span>{language.name}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="countryInfo-row-2">
            <h4>Border Countries:</h4>
            {cas.borders.map((border) => (
              <p key={border}>{border}</p>
            ))}
            {cas.borders.length < 1 && <p>No Border Countries</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
