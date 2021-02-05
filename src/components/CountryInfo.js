import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CountriesContext } from "../context/CountriesContext";
import "../styles/CountryInfo.css";
function CountryInfo() {
  const { name } = useParams();
  const history = useHistory();

  const [countries, setCountries] = useContext(CountriesContext);
  const [country, setCountry] = useState([]);
  function goBack() {
    console.log(history.push("/"));
  }

  useEffect(() => {
    getCountryInfo();
  }, []);

  function getCountryInfo() {
    countries.filter((data) => {
      if (data.name === name) {
        setCountry(data);
      } else {
        return data;
      }
    });
  }
  if (country.length < 1) {
    return <div>Loading...</div>;
  }
  return (
    <div className="CountryInfo">
      <div className="back-button-container">
        <button onClick={goBack}>BACK</button>
      </div>
      <div className="countryInfo-bottom">
        <div className="left-side">
          <div className="countryInfo-flag">
            <img src={country.flag} alt={country.name} />
          </div>
        </div>
        <div className="right-side">
          <div className="countryInfo-row-1">
            <div className="col-1">
              <div className="countryInfo-name">{country.name}</div>
              <div className="countryInfo-population">
                Population: <span>{country.population}</span>
              </div>
              <div className="countryInfo-region">
                Region: <span>{country.region}</span>
              </div>
              <div className="countryInfo-subRegion">
                Sub Region: <span>{country.subregion}</span>
              </div>
              <div className="countryInfo-capital">
                Capital: <span>{country.capital}</span>
              </div>
            </div>
            <div className="col-2">
              <div className="countryInfo-topDomain">
                {country.topLevelDomain.map((toplvldom) => (
                  <p>
                    Top Level Domain: <span>{toplvldom}</span>
                  </p>
                ))}
              </div>
              <div className="countryInfo-currencies">
                {country.currencies.map((curr) => (
                  <p>
                    Currencies: <span>{curr.code}</span>
                  </p>
                ))}
              </div>
              <div className="countryInfo-languages">
                <h4>Languages:</h4>
                {country.languages.map((language) => (
                  <p>
                    <span>{language.name}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="countryInfo-row-2">
            <h4>Border Countries:</h4>
            {country.borders.map((border) => (
              <p>{border}</p>
            ))}
            {country.borders.length < 1 && <p>No Border Countries</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
